import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

type FirebaseConfig ={
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

export const firebaseConfig: FirebaseConfig = {
    apiKey: "AIzaSyDCdHTZonx79_GHyPRp9G072KetiMCimOc",
    authDomain: "react-stripe-d0177.firebaseapp.com",
    projectId: "react-stripe-d0177",
    storageBucket: "react-stripe-d0177.appspot.com",
    messagingSenderId: "627641145096",
    appId: "1:627641145096:web:79a4f80e168dc659a13ebd",
    measurementId: "G-SQ083N746K"
  };

  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();