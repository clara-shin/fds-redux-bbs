const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

// Express 앱 객체 생성
const app = express();

// 미들웨어 등록
app.use(bodyParser.json());
app.use(cors({ origin: true }));

const myToken = functions.config().github.token; // '48d7e353e6abf67f4b7c6d6cb202fa5b712b329f';

app.get('/repos', (req, res) => {
  return fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${myToken}`
    }
  })
  .then(res => res.json())
  .then(data => {
    res.send(data);
  })

})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.github = functions.https.onRequest(app);
