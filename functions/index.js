const functions = require('firebase-functions')
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase)

const db = admin.firestore()

exports.collect = functions.https.onRequest((req, res) => {
    const issues = db.collection('issues')
    const keywords = db.collection('keywords')

    for (let key in req.body) {
        issues.doc(key).set(req.body[key])
        for (let keykey in req.body[key].keywords) {
            keywords.doc(keykey).get()
            .then(function(dataSnapshot) {
                keyword = req.body[key].keywords[keykey]
                keywordis = {}
                if (dataSnapshot.exists) {
                    if (dataSnapshot.data().val.length > keyword.length) {
                        keywordis.val = keyword
                    } else {
                        keywordis.val = dataSnapshot.data().val
                    }
                    keywordis.val = dataSnapshot.data().n + 1
                } else {
                    keywordis.val = keyword
                    keywordis.n = 1
                }
                keywords.doc(keykey).set(keywordis)
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
        }
    }

    res.status(200).send()
})