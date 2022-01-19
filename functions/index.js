const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KJK8pGRhXHPvNs1zi14A9zZez40CXu3QxsHXbc0MEK7geUgSefTdJy3YwbAE48Y0LZV3lnRLocY59nCLvkiuA1Z00JyPGkc9r"
);

//App setup
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-989c5/us-central1/api
