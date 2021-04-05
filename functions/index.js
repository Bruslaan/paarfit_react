const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);

const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "c8nsbmv7p2q24tv9",
    publicKey: "f6q9dwp7fvnvy4rx",
    privateKey: "3d2ec2affe5afc5dc4f9562b86aba5aa"
});

app.get("/client_token", (req, res) => {
    gateway.clientToken.generate({}).then(response => {
        res.send({token: response.clientToken});
    });
});

app.post("/checkout", async (req, res) => {
    const nonceFromTheClient = req.body.payment_method_nonce;

    let result
    try {
        result = await gateway.customer.create({
            firstName: "Charity3",
            lastName: "Smith3",
            paymentMethodNonce: nonceFromTheClient,
        })
    } catch (error) {
        console.log("Cannot create user ", error)
        res.send({status: "Failed"})
    }

    console.log(result)
    // Use payment method nonce here
    gateway.subscription.create({
        paymentMethodToken: result["customer"].paymentMethods[0].token,
        planId: "bulatschki",

    }).then(result => {
        res.send({status: result})
    }).catch((error) => res.send({error: error}))
});

app.get("/getAllPlans", async (req, res) => {

    const plays = await gateway.plan.all()
    res.send({test: plays});
});
exports.payment = functions.https.onRequest(app);