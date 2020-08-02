import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

export const getAllWords = functions.https.onRequest((request, response) => {
    const docRef = db.collection('words').doc('wordId');
    docRef.get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such document!');
                return response.send('Not Found')
            }
            console.log(doc.data());
            return response.send(doc.data());
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
});
