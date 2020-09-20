import firebase from 'firebase'


export const firebaseConfig = {
    apiKey: "AIzaSyAPEP1AFFg111oeqeVSUcvjRvAorO06-Uc",
    authDomain: "paarfit-c3029.firebaseapp.com",
    databaseURL: "https://paarfit-c3029.firebaseio.com",
    projectId: "paarfit-c3029",
    storageBucket: "paarfit-c3029.appspot.com",
    messagingSenderId: "462160346735",
    appId: "1:462160346735:web:5100a0be1766cd1625579a",
    measurementId: "G-GBNWN1WNZ1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



export const handleLogout = (event?: any, loggedOut?: () => void) => {
    // event.preventDefault();
    console.log("logging out ")
    firebase
        .auth()
        .signOut()
        .then(res => {
            // loggedOut()
        })
}



export default firebase;
