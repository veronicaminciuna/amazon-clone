import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsrogvs0zJa59Kje7_JlA-Xv2SJwbRNVs",
  authDomain: "project-3438d.firebaseapp.com",
  projectId: "project-3438d",
  storageBucket: "project-3438d.appspot.com",
  messagingSenderId: "15455220877",
  appId: "1:15455220877:web:12631d1995ee9297521ec4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
