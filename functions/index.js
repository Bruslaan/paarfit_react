const functions = require('firebase-functions');
const express = require('express');
const admin = require("firebase-admin");
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);
admin.initializeApp()
const db = admin.firestore();

const braintree = require("braintree");
const sk = "sk_test_51IAYJKCwuSLwjWaZ03bvWPtJJcVux0k56RLR4cQm0iP0KKCBq5IEi6FOonGIZCvg1ZrWkqDYKtTvIGUVEyWhTEfy000Uchk8ct"

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


app.post("/create_subscription_checkout", async (req, res) => {
    const stripe = require('stripe')(sk);

    const priceId = req.body.price_id
    const userID = req.body.user_id
// The price ID passed from the client
//   const {priceId} = req.body;

    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        client_reference_id: userID,
        line_items: [
            {
                price: priceId,
                // For metered billing, do not pass quantity
                quantity: 1,
            },
        ],
        // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
        // the actual Session ID is returned in the query parameter when your customer
        // is redirected to the success page.
        success_url: 'https://app.paarfit.de/succpage',
        cancel_url: 'https://app.paarfit.de/',
    });

    console.log(session.url)

    res.send({redirectUri: session.url})

});


// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys

app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
    const stripe = require('stripe')(sk);
    console.log("Hallo ich wurde angerufen")
    // Check if webhook signing is configured.

    const webhookSecret = "whsec_rB22YI1YcZOYCAkkfskKAqcFeQrvtgYO"
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.rawBody, req.headers['stripe-signature'], webhookSecret);
    } catch (err) {
        console.log(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const data = event.data.object
            console.log("Session completed with ", data["client_reference_id"])
            await db.collection("users").doc(data["client_reference_id"]).set({payed: true}, {merge: true})
            console.log("should be payed now")
            // Then define and call a function to handle the event checkout.session.completed
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send();
});
exports.payment = functions.https.onRequest(app);
