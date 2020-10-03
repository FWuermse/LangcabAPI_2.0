"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWord = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const uuid_1 = require("uuid");
exports.addWord = functions.https.onRequest((request, response) => {
    const word = request.body;
    console.log(word);
    // Add a new document in collection 'words' a random UUID
    db.collection('words').doc(uuid_1.v4()).set(word).then(document => {
        response.status(200).send(document);
    });
});
//# sourceMappingURL=index.js.map