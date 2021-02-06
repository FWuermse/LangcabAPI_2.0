import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {Word} from './word';
import {WordValidator} from "./word-validator";

admin.initializeApp();
const db = admin.firestore();
import { v4 as uuidv4 } from 'uuid';
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";

export const addWord = functions.https.onRequest((request, response) => {
    try {
        const userId: string = '123';
        const word: Word = WordValidator.validate(request.body, userId);

        // Add a new document in collection 'words' a random UUID
        db.collection('words').doc(uuidv4()).set(word).then(document => {
            response.status(200).send(document);
        });
    } catch (e) {
        response.status(500).send('Word entry is formatted incorrectly: ' + e);
    }
});

export const getById = functions.https.onRequest((request, response) => {
    try {
        const idParam = request.query.id;
        if (typeof idParam === 'string') {
            db.collection('words').doc(idParam).get().then(document => {
                response.status(200).send(document.data());
            });
        } else {
            throw new Error('Query parameter id is either missing or formatted incorrectly')
        }
    } catch (e) {
        response.status(500).send('Failed to retrieve word: ' + e);
    }
});

export const searchWord = functions.https.onRequest((request, response) => {
    try {
        const query = request.params.search;
        const language = request.params.language;
        const page = request.params.page;
        const size: number = Number(request.params.size);
        const sortBy = request.params.size;
        const previousDocument: DocumentSnapshot = request.body;
        if (typeof idParam === 'string') {
            db.collection('words').orderBy(sortBy).limit(size).startAfter(previousDocument).get().then(document => {
                response.status(200).send(document.docs);
            });
        } else {
            throw new Error('Query parameter id is either missing or formatted incorrectly')
        }
    } catch (e) {
        response.status(500).send('Failed to retrieve word: ' + e);
    }
});
