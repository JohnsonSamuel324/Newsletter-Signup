var regex = /^([a-zA-Z0-9\_\+\-\~])+@([a-zA-Z])+\.([a-zA-Z])+$/;
var inputEmail = document.getElementById("input-email");
var inputError = document.getElementById("p-inputError");
var divOverlay = document.getElementsByClassName("div-overlay")[0];
var mainDiv = document.getElementsByClassName("main")[0];
var signupDiv = document.getElementsByClassName("container-signup")[0];


function checkSubmit() {
    if (!regex.test(inputEmail.value)) {
        inputEmail.style.backgroundColor = "hsl(4, 100%, 95%)";
        inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
        inputEmail.style.color = "red";
        inputError.style.display = "block";
    } else {
        divOverlay.style.display = "flex";
        mainDiv.classList.add("confirmed");
        signupDiv.classList.add("confirmed");
        inputEmail.value = "";
        removeErrors();
    }
}

function removeErrors() {
    inputEmail.style.backgroundColor = "unset";
    inputEmail.style.borderColor = "hsl(231, 7%, 60%)";
    inputEmail.style.color = "black";
    inputError.style.display = "none";
}

function dismissMsg() {
    divOverlay.style.display = "none";
    mainDiv.classList.remove("confirmed");
    signupDiv.classList.remove("confirmed");
    
}

inputEmail.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn-subscribe").click();
    }
})