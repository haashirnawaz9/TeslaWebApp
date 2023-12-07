// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC37TeFCqPuJBhJm7cuxq4fg1tKedoyT0",
  authDomain: "teslanative.firebaseapp.com",
  projectId: "teslanative",
  storageBucket: "teslanative.appspot.com",
  messagingSenderId: "1087674392036",
  appId: "1:1087674392036:web:e8bbed25d1cf85611c3bf1",
  measurementId: "G-2TJXHGVYVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
