const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();

//create a new user
var db = firebase.firestore();
// var usersRef = db.collection('users');

// app.post('/api/users', async (req, res) => {
//     try {
//         console.log("INSIDE POST");
//         let querySnapshot = await usersRef.get();
//         let numRecords = querySnapshot.docs.length;
//         let user = {
//             id: numRecords + 1;
//             name: req.body.name,
//             email: req.body.email,
//             path: req.body.path
//         };
//         usersRef.doc(user.id.toString()).set(user);
//         res.send(user);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

// app.get('/api/users', async (req, res) => {
//     try {
//         let querySnapshot = await usersRef.get();
//          res.send(querySnapshot.docs.map(doc => doc.data()));
//     } catch (err) {
//         res.sendStatus(500);
//     }
// });

// app.delete('/api/users/:id', async (req, res) => {
//     try {
//         let querySnapshot = await usersRef.get();
//         let id = req.params.id;
//         usersRef.doc(id).delete();
//         res.send(true);
//     } catch (err) {
//         res.sendStatus(500);
//     }
// });

// app.put('/api/users/:id', async (req, res) => {
//     try {
//         let newName = req.body.name;
//         let newEmail = req.body.email;
//         let id = req.params.id;
//         usersRef.doc(id).update({"name": newName, "email": newEmail});
//         res.send(true);
//     } catch (err) {
//         res.sendStatus(500);
//     }
// });

exports.app = functions.https.onRequest(app);