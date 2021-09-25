import React, {useContext} from 'react';
import './Button.css';
import {AuthContext} from "../../../AuthProvider";
import {useHistory} from "react-router";

const Button = ({type}: any) => {

    const history = useHistory()
    console.log(type)
    const {user} = useContext(
        AuthContext
    );

    console.log(user?.uid)

    const createSession = async () => {

        if(!user){
            history.push("/registrieren")
            return
        }

        const priceID = type.type === "monatlich" ? "price_1JXMhUCwuSLwjWaZ1fkmCU0T" : "price_1JXMhsCwuSLwjWaZkkbOC2jZ"

        const rawResponse = await fetch('https://us-central1-ruslantests.cloudfunctions.net/payment/create_subscription_checkout', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({price_id: priceID, user_id: user?.uid})
        });
        const content = await rawResponse.json();
        console.log(content)
        window.location.replace(content.redirectUri)

    }


    return <button onClick={() => createSession()} className='btn'>Jetzt starten</button>;
};

export default Button;
