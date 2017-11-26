import time
import firebase_admin
import requests
from google.cloud import firestore
from google import api_core
import fbparser
import postpreprocessor as ppp
from datasketch import MinHashLSH
import bomber

app_id = "1606224726374873"
app_secret = "28b002fa46555840725d71dfa3b65621"
access_token = app_id + "|" + app_secret

collector_endpoint = "https://us-central1-cityideas-e6dba.cloudfunctions.net/collect"

minhash_size = 192
posts_per_requests = 20

lsh = MinHashLSH(
   threshold=0.2, num_perm=minhash_size, storage_config={
      'type': 'redis',
      'redis': {'host': 'localhost', 'port': 6379}
   })

db = firestore.Client()
issues_ref = db.collection(u'issues')
keywords_ref = db.collection(u'keywords')
sourcesnew_ref = db.collection(u'sources')
sourcescom_ref = db.collection(u'complete')

def runito(): 
  while True:
    items = sourcesnew_ref.get()
    for item in items:
      processSource(item.to_dict()["source"])
      sourcesnew_ref.document(item.id).delete()
      sourcescom_ref.document(item.id).set(item.to_dict())

    time.sleep(3)


def processSource(source):
  since_date = "2017-09-25"
  until_date = "2017-11-25"
  request_posts = dict()
  for post in fbparser.scrapePage(source, access_token, since_date, until_date):
    if not ppp.isValid(post):
      continue
    
    post["minhash"] = ppp.getMinHash(post, minhash_size)
    lsh.insert(post['status_id'], post['minhash'])
    post["similar"] = lsh.query(post['minhash'])
    post["similar"].remove(post["status_id"])
    del post["minhash"]

    status_id = post['status_id']
    del post['status_id']

    post["keywords"] = list()

    for kw_pair in post["keyword_pairs"]:
      data = {}
      try:
        snap = keywords_ref.document(kw_pair).get()
        if not snap.exists:
          raise api_core.exceptions.NotFound

        data = snap.to_dict()
        data["n"] += 1

        if len(data["val"]) > len(post["keyword_pairs"][kw_pair]):
          data.val = post["keyword_pairs"][kw_pair]

      except api_core.exceptions.NotFound:
        data = { "val": post["keyword_pairs"][kw_pair], "n": 1}
      except AttributeError:
        print(data)

      keywords_ref.document(kw_pair).set(data)
      post["keywords"].append(kw_pair)
    
    del post["keyword_pairs"]

    issues_ref.document(status_id).set(post)
runito()
