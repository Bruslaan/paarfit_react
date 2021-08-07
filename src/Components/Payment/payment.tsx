import React, {useContext, useEffect, useState} from 'react'


function PaymentComponent() {


    useEffect(() => {


        async function initPayment() {

            const response = await fetch("http://localhost:5001/ruslantests/us-central1/payment/client_token")
            const responseJson = await response.json()
            const token = responseJson?.token
            if (!token) {
                return
            }

                braintree.client.create({
                    authorization: token
                }).then(function (clientInstance) {
                    return braintree.paypalCheckout.create({
                        client: clientInstance
                    });
                }).then(function (paypalCheckoutInstance) {
                    // set up the PayPal JS SDK
                }).catch(function (err) {
                    console.error('Error!', err);
                });
        }

        initPayment()

    }, []);


    return (
        <div>
            <div id="paypal-container"></div>
        </div>
    )
}

export default PaymentComponent
