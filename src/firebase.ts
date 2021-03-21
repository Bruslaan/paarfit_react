import firebase from 'firebase';
import 'firebase/storage';

export const firebaseConfig = {
  apiKey: 'AIzaSyAPEP1AFFg111oeqeVSUcvjRvAorO06-Uc',
  authDomain: 'paarfit-c3029.firebaseapp.com',
  databaseURL: 'https://paarfit-c3029.firebaseio.com',
  projectId: 'paarfit-c3029',
  storageBucket: 'paarfit-c3029.appspot.com',
  messagingSenderId: '462160346735',
  appId: '1:462160346735:web:5100a0be1766cd1625579a',
  measurementId: 'G-GBNWN1WNZ1',
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const handleLogout = (event?: any, loggedOut?: () => void) => {
  // event.preventDefault();
  console.log('logging out ');
  firebase
    .auth()
    .signOut()
    .then((res) => {
      // loggedOut()
      console.log('Logged Out');
    });
};

export let todayTimestamp = firebase.firestore.Timestamp.now().toDate();
export const heutigesDatum: string =
  todayTimestamp.getDate() +
  '_' +
  todayTimestamp.getMonth() +
  '_' +
  todayTimestamp.getFullYear();

export const db = firebase.firestore();

export const uploadImage = async (prefix: string, file: any) => {
  let imageURL = '';
  try {
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(prefix + file.name);
    await fileRef.put(file);
    imageURL = await fileRef.getDownloadURL();
  } catch (error) {
    console.log('Cannot upload file:', error);
  }

  return imageURL;
};

export default firebase;
