const functions = require('firebase-functions')
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase)

const db = admin.database()

exports.collect = functions.https.onRequest((req, res) => {
    const issues = db.ref('issues')

    issues.update(req.body)

    res.status(200).send()
})