import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

export const getAllWords = functions.https.onRequest((request, response) => {
    const words = db.collection('words');
    words.get()
        .then(collection => {
            console.log(collection.docs);
            return response.send(collection.docs);
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
});
