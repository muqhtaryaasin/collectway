// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
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


const signupForm = document.getElementById('signup');
console.log('signupForm',signupForm);
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value;
    console.log(emailValue);

    const passwordInput = document.querySelector('#password');
    const passwordValue = passwordInput.value;
    console.log(passwordValue);

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((cred) => {
        console.log('user created : ', cred.user);
        signupForm.reset();
      })
      .catch((err) => {
        console.log(err.message);

        const myModel = document.getElementById('myModal');
        myModel.style.display = 'block';
        const pElement = myModel.querySelector('p');
        console.log(pElement);
        pElement.innerHTML = err.message;

        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
          myModel.style.display = "none";
      }
      })

  });
}

const msgModal = document.getElementById('myModal');
console.log('msgModal', msgModal);
  if (msgModal){
    document.getElementById('okButton').addEventListener('click', function() {
      document.getElementById('myModal').style.display = 'none';
      
    });  
  }