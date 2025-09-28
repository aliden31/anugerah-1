import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import PDFDocument from "pdfkit";

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

export const hello = functions.https.onRequest((req, res) => {
  res.send("Hello from POS Akuntansi Functions!");
});

export const reportNegativeStock = functions.https.onCall(async (data, ctx) => {
  const { orgId } = data || {};
  if (!orgId) throw new functions.https.HttpsError("invalid-argument", "orgId required");
  const snap = await db.collection("inventory_items").where("orgId","==",orgId).where("qty_on_hand","<",0).get();
  return snap.docs.map(d=>({ id:d.id, ...d.data() }));
});

export const exportReportPdf = functions.https.onCall(async (data, ctx) => {
  const { orgId, start, end } = data || {};
  if (!orgId) throw new functions.https.HttpsError("invalid-argument","orgId required");
  const doc = new PDFDocument();
  const chunks: Buffer[] = [];
  doc.on("data", (c)=>chunks.push(c));
  doc.on("end",()=>{});
  doc.text(`Laporan untuk org ${orgId}, periode ${start} - ${end}`);
  doc.end();
  return Buffer.concat(chunks).toString("base64");
});
