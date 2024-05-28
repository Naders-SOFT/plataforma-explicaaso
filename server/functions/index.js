const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();

const db = admin.firestore();

app.use(cors({ origin:true }));

// Rotas:
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
})

// Create

// Read

// Update

// Delete

// Exporta a API para Firebase Cloud Functions:
exports.app = functions.https.onRequest(app);