let facebook = document.getElementById("facebook");
let google = document.getElementById("google");
let togglePassword = document.getElementById("togglePassword");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

facebook.onclick = function(){
    window.open("http://www.facebook.com");
};

google.onclick = function(){
    window.open("http://www.google.com");
};

togglePassword.onclick = function(){
    if(togglePassword.classList.contains("fa-eye")){
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
        togglePassword.textContent =  " Hide password";
        password.type = "text";
        confirmPassword.type = "text";
    }
    else{
        togglePassword.classList.add("fa-eye");
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.textContent =  " Show password";
        password.type = "password";
        confirmPassword.type = "password";
    }
};
