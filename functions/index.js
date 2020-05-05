const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const quizRouter = require('./routes/quiz/router');

const app = express();

app.use(cors());
app.use('/', quizRouter);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!!!!");
// });

exports.api = functions.region('asia-northeast1').https.onRequest(app);