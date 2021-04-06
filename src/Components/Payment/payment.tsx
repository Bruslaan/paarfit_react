import React, {useContext, useEffect, useState} from 'react'

const dropin = require('braintree-web-drop-in');

function PaymentComponent() {


    useEffect(() => {


        async function initPayment() {

            const response = await fetch("http://localhost:5001/ruslantests/us-central1/payment/client_token")
            const responseJson = await response.json()
            const token = responseJson?.token
            if (!token) {
                return
            }

            let button = document.querySelector('#submit-button');

            dropin.create({
                authorization: token,
                selector: '#dropin-container',
                paypal: {
                    currency: "EUR",
                    amount: "22",
                    flow: "checkout"
                }

            }, function (err: any, instance: any) {

                button?.addEventListener('click', function () {
                    if(!instance){
                        return
                    }
                    instance?.requestPaymentMethod(async function (err: any, payload: any) {
                        // Submit payload.nonce to your server
                        const response = await fetch("http://localhost:5001/ruslantests/us-central1/payment/checkout", {
                            method: 'POST', // *GET, POST, PUT, DELETE, etc.
                            headers: {
                                'Content-Type': 'application/json'
                                // 'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: JSON.stringify({"payment_method_nonce": payload?.nonce}) // body data type must match "Content-Type" header
                        });

                        console.log("response ", await response.json())
                    });
                })
            });
        }

        initPayment()

    }, []);


    return (
        <div>
            <div id="dropin-container"></div>
        </div>
    )
}

export default PaymentComponent
