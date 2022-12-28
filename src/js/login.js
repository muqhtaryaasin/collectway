import { auth, createUserWithEmailAndPassword} from "../index.js";
import {getUImessage} from "./ui-messages.js";

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
let myModel = null;
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
      })
      .catch((err) => {
        signupForm.reset();
        const errorMsg = getUImessage(err.code);

        myModel = document.getElementById('myModal');
        myModel.style.display = 'block';
        const pElement = myModel.querySelector('p');
        pElement.innerHTML = errorMsg;

        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
          myModel.style.display = "none";
        }

        const msgContent = document.getElementById('msgContent');
        console.log(msgContent);
        msgContent.style.backgroundColor = '#f43636';
      })

      
     
  });
}

// if (myModel){
//   const msgContent = document.getElementById('msgContent');
//   console.log(msgContent);
//   msgContent.style.backgroundColor = 'red';
// }
