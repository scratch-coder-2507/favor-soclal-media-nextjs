import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCvOxh14vBKlumy9_ZEohYrEZcf_3tnX5A",
    authDomain: "favor-abdd2.firebaseapp.com",
    projectId: "favor-abdd2",
    storageBucket: "favor-abdd2.appspot.com",
    messagingSenderId: "904680099118",
    appId: "1:904680099118:web:858f69c6623a1d6baffebf"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};