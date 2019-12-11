// JavaScript source code
window.onscroll = function () {
    dontScroll()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function dontScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

var username = document.forms["vform"]["username"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];
var password_confirmation = document.forms["vform"]["password_confirmation"];

var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");

username.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);

//validation
function Validate() {
    //username validation
    if (username.value == "") {
        username.style.border = "1px solid red";
        name_error.textContent = "Username is required";
        username.focus();
        return false;
    }
    //email validation
    if (email.value == "") {
        email.style.border = "1px solid red";
        email_error.textContent = "Email is required";
        email.focus();
        return false;
    }

    //password validation
    if (password.value == "") {
        password.style.border = "1px solid red";
        password_error.textContent = "Username is required";
        password.focus();
        return false;
    }

    //Event handler functions
    function nameVerify() {
        if (username.value != "") {
            username.style.border = "1px solid #5E6E66";
            name_error.innerHTML = "";
            return true;
        }
    }
    function emailVerify() {
        if (email.value != "") {
            email.style.border = "1px solid #5E6E66";
            email_error.innerHTML = "";
            return true;
        }
    }
    function passwordVerify() {
        if (password.value != "") {
            password.style.border = "1px solid #5E6E66";
            password_error.innerHTML = "";
            return true;
        }
    }

    function submitAction() {
        document.getElementById("submitBtn").onclick = alert("Email sent to 'Fbaloyi@comicon.io'");
        
    }

}