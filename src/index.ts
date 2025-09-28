import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}

export const helloWorld = functions.https.onRequest((req, res) => {
  res.send("POS Akuntansi Functions up and running!");
});