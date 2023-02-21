// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA095eo0mNZEe-F631twvVberXd-l-VauM",
  authDomain: "chatroom579.firebaseapp.com",
  projectId: "chatroom579",
  storageBucket: "chatroom579.appspot.com",
  messagingSenderId: "816559122174",
  appId: "1:816559122174:web:204fecc46ae0ca0af2e7af",
  measurementId: "G-JW4QD61BS9"
};

// Initialize Firebase
export const auth = firebase.initializeApp(firebaseConfig).auth();
