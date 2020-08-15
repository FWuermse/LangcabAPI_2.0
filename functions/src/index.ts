import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {WORD} from './word';
admin.initializeApp();
const db = admin.firestore();
import { v4 as uuidv4 } from 'uuid';

export const addWord = functions.https.onRequest((request, response) => {
    const word: WORD = request.body;

    console.log(word);

    // Add a new document in collection 'words' a random UUID
    db.collection('words').doc(uuidv4()).set(word).then(document => {
        return document
    });
});
