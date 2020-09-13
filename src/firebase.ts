import firebase from 'firebase'


export const firebaseConfig = {
    apiKey: "AIzaSyDZAO3cV9a3nvE8sdq6mw4XedhaHbhLA6U",
    authDomain: "paarfit-90016.firebaseapp.com",
    databaseURL: "https://paarfit-90016.firebaseio.com",
    projectId: "paarfit-90016",
    storageBucket: "paarfit-90016.appspot.com",
    messagingSenderId: "366942457372",
    appId: "1:366942457372:web:c43046c7839ffc973999d9",
    measurementId: "G-65CF9C79SN"
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
