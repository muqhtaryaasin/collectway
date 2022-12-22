import google from './assets/google.png';
import handshake from './assets/handshake.png';
import increase from './assets/increase.png';

// document.getElementById("google").src = google;
document.getElementById("handshake").src = handshake;
document.getElementById("increase").src = increase;

// import style from "./css/style.css";

import {writeNavigation} from "./js/nav.js";
import {forms, pwShowHide, links} from "./js/script.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZzhwA3QbCSovnqaz6piAy9BirmO9b6Qc",
  authDomain: "collectway-6ade0.firebaseapp.com",
  projectId: "collectway-6ade0",
  storageBucket: "collectway-6ade0.appspot.com",
  messagingSenderId: "311156212891",
  appId: "1:311156212891:web:4b1fd739086333d2f1f23e",
  measurementId: "G-YZB5PVHVGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (user != null){
    console.log('Logged in! ya');
  }else {
    console.log('No user ke');
  }
})


window.onload = writeNavigation;
