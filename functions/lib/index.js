"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.addWord = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const word_validator_1 = require("./word-validator");
admin.initializeApp();
const db = admin.firestore();
const uuid_1 = require("uuid");
exports.addWord = functions.https.onRequest((request, response) => {
    try {
        const word = word_validator_1.WordValidator.validate(request.body);
        // Add a new document in collection 'words' a random UUID
        db.collection('words').doc(uuid_1.v4()).set(word).then(document => {
            response.status(200).send(document);
        });
    }
    catch (e) {
        response.status(500).send('Word entry is formatted incorrectly: ' + e);
    }
});
exports.getById = functions.https.onRequest((request, response) => {
    try {
        const idParam = request.query.id;
        if (typeof idParam === 'string') {
            db.collection('words').doc(idParam).get().then(document => {
                response.status(200).send(document.data());
            });
        }
        else {
            throw new Error('Query parameter id is either missing or formatted incorrectly');
        }
    }
    catch (e) {
        response.status(500).send('Failed to retrieve word: ' + e);
    }
});
//# sourceMappingURL=index.js.map