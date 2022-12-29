import { FirebaseError } from "firebase/app";
import { auth, createUserWithEmailAndPassword} from "../index.js";
import {getUImessage, updateUImessageDialog} from "./ui-messages.js";

const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

const signupForm = document.getElementById('signup');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value;

    const passwordInput = document.querySelector('#password');
    const passwordValue = passwordInput.value;

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((cred) => {
        console.log('user created : ', cred.user);
        signupForm.reset();
        updateUImessageDialog('user created');
      })
      .catch((err) => {
        signupForm.reset();
        console.error(err);
        updateUImessageDialog(err);      
      })    
  });
}

