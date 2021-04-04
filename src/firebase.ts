import firebase from 'firebase';
import 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyAZQYO70xs-gNoDipQoiZHylwlINbzk4JM",
    authDomain: "ruslantests.firebaseapp.com",
    databaseURL: "https://ruslantests.firebaseio.com",
    projectId: "ruslantests",
    storageBucket: "ruslantests.appspot.com",
    messagingSenderId: "853046165041",
    appId: "1:853046165041:web:0cc5a9878fcc1a0bef9f10",
    measurementId: "G-LCTS5S87TP"
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
