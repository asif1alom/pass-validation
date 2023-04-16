//Selecting All the inputs
let form = document.querySelector(".frm");
let mail = document.querySelector(".email");
let pass = document.querySelector(".pass");
let Cpass = document.querySelector(".Cpass");
let sub = document.querySelector(".sub");
let eye = document.querySelector(".fa-eye");
let eye2 = document.querySelector("#f");
let info1 = document.querySelector(".info1");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");

let a = 0;
let b = 0;
let c = 0;


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


eye2.addEventListener('click', () => {
    if (Cpass.type === "password") {
        Cpass.type = "text";
    } else {
        Cpass.type = "password";
    }
    
    if (eye2.className === "fa fa-eye") {
        eye2.className = "fa fa-eye-slash";
    }
    else {
        eye2.className = "fa fa-eye";
    }
        
   
});

mail.addEventListener('keyup', () => {
    if (mail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
       
        mail.classList.add("valid");
        mail.classList.remove("invalid");
        info1.classList.remove("show");

        a = 1;

    }
    else {
        mail.classList.add("invalid");
        mail.classList.remove("valid");
        info1.classList.add("show");
    }
})


pass.addEventListener("keyup", () => {
    
    if (pass.value.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        pass.classList.add("valid");
        pass.classList.remove("invalid");
        info2.classList.remove("show");

        b = 1;

    }
    else {
          pass.classList.add("invalid");
        pass.classList.remove("valid");
        info2.classList.add("show");
    }


})


Cpass.addEventListener("keyup", () => {
    if (pass.value == Cpass.value) {
        Cpass.classList.add("valid");
        Cpass.classList.remove("invalid");
        info3.classList.remove("show");

        c = 1;

} else {
    Cpass.classList.add("invalid");
        Cpass.classList.remove("valid");
        info3.classList.add("show");
}
})




sub.addEventListener("click", (event) => {
    
    if (a==1 && b==1 && c==1) {
        console.log("hello");
        
    } else {
        event.preventDefault();
}


})