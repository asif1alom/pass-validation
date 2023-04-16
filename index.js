//Selecting All the inputs
let form = document.querySelector(".frm");
let mail = document.querySelector(".email");
let pass = document.querySelector(".pass");
let Cpass = document.querySelector(".Cpass");
let sub = document.querySelector(".sub");
let eye = document.querySelector(".fa-eye");
let info = document.querySelector(".info");

let vmail = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";


eye.addEventListener('click', () => {
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
    
    if (eye.className === "fa fa-eye") {
        eye.className = "fa fa-eye-slash";
    }
    else {
        eye.className = "fa fa-eye";
    }
        
   
});

mail.addEventListener('keyup', () => {
    if (mail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
       
        mail.classList.add("valid");
        mail.classList.remove("invalid");

    }
    else {
        mail.classList.add("invalid");
        mail.classList.remove("valid");
    }
})
