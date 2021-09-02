import React, {useContext} from 'react';
import './Button.css';
import {AuthContext} from "../../../AuthProvider";

const Button = ({type}: any) => {
    const {user} = useContext(
        AuthContext
    );

    console.log(user?.uid)

    const createSession = async () => {

        console.log("hallo ich wurde gecalled")
        console.log(type.subPeriode)

        const rawResponse = await fetch('https://us-central1-ruslantests.cloudfunctions.net/payment/create_subscription_checkout', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({price_id: "price_1JUuzvGuk1HRD8M6c5Uy8Our", user_id: user?.uid})
        });
        const content = await rawResponse.json();
        console.log(content)
        window.location.replace(content.redirectUri)

    }


    return <button onClick={() => createSession()} className='btn'>Jetzt starten</button>;
};

export default Button;
