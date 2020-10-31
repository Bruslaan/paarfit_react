import React, { useContext, useEffect } from 'react'
import firebase from '../firebase'
import { AuthContext } from '../AuthProvider'
function Tagebuch() {
    const firestore = firebase.firestore()
    const { user } = useContext(AuthContext)


    useEffect(() => {

        firestore.collection("users").doc(user?.uid).collection("workouts").get().then(docSnapshot => {
            docSnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        }).catch(error => {
            console.log("cannot fetch workouts ", error)
        })

    }, [])



    return (
        <div>
            Mein Tagebuch
        </div>
    )
}

export default Tagebuch
