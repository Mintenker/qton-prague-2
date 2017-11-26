import time
import firebase_admin
import requests
from firebase_admin import credentials
from firebase_admin import db
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

# cred = credentials.Certificate('path/to/serviceAccountKey.json')
# default_app = firebase_admin.initialize_app(cred)

# default_app = firebase_admin.initialize_app()

# ref = db.reference('/some_resource')
# print(ref.get())

# ('123822671018049_1538738372859798', 'Omezení pálení listí jako jeden z brněnských kroků na cestě k čistějšímu ovzduší. Pomůže?', '', 'video', 'https://www.facebook.com/udalostibrno/videos/1538738372859798/', '2017-11-07 08:17:54', 34, 12, 3, 19, 2, 0, 13, 0, 0)
def runito():  
  fuckin_firebase_result = ["udalostibrno"]
  if len(fuckin_firebase_result) > 0:
    since_date = "2017-09-25"
    until_date = "2017-11-25"
    request_posts = list()
    for post in fbparser.scrapePage(fuckin_firebase_result[0], access_token, since_date, until_date):
      if not ppp.isValid(post):
        continue
      
      post["minhash"] = ppp.getMinHash(post, minhash_size)
      lsh.insert(post['status_id'], post['minhash'])
      post["similar"] = lsh.query(post['minhash'])
      post["similar"].remove(post["status_id"])
      del post["minhash"]

      request_posts.append(post)
      if len(request_posts) == posts_per_requests:
        bomber.makePost(collector_endpoint, request_posts)
        request_posts = list()

    if len(request_posts) != 0:
      bomber.makePost(collector_endpoint, request_posts)

  time.sleep(3)
runito()