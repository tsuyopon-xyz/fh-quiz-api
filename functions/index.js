const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const quizRouter = require('./routes/quiz/router');

const app = express();

app.use(cors());
app.use('/', quizRouter);

exports.api = functions.region('asia-northeast1').https.onRequest(app);