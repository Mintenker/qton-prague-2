from google.cloud import firestore

# Add a new document
db = firestore.Client()
# Then query for documents
users_ref = db.collection(u'keywords').document(u'slovo').get()
if users_ref.exists:
    print(users_ref.to_dict())
users_refs = db.collection(u'keywords').document(u'slovot').get()
if users_refs.exists:
    print(users_refs.to_dict())
