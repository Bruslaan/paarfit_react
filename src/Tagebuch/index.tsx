import React, { useContext, useEffect, useState } from 'react'
import firebase from '../firebase'
import { AuthContext } from '../AuthProvider'
function Tagebuch() {
    const firestore = firebase.firestore()
    const { user } = useContext(AuthContext)
    const [workouts, setworkouts]: any = useState([])

    useEffect(() => {

        firestore.collection("users").doc(user?.uid).collection("pflicht_workouts").get().then(docSnapshot => {
            docSnapshot.forEach((doc: any) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                let docName: string = doc.id
                setworkouts([...workouts, docName])
            });
        }).catch(error => {
            console.log("cannot fetch workouts ", error)
        })

    }, [])



    return (
        <div>
            Mein Tagebuch
            {
                workouts.map((workout:any) =><p>{workout}</p>)
            }
        </div>
    )
}

export default Tagebuch
