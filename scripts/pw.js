// Password manager
localStorage.getItem("pw?12");
let pInput = document.getElementById("password_input");
let infoTXT = document.getElementById("security_info_text");

function checkPW() {
    let checkPassword = localStorage.getItem("pw?12");

    if(checkPassword === '' || checkPassword === null || checkPassword === 'pwo$18') {
        // Nothing
    } else {
        let pwField = document.getElementById("pwField");
        pwField.style.display = "flex";
    }
}
checkPW();

function verifyPW() {
    let confrimPW = document.getElementById("confrimPW");
    let checkConfrimPW = confrimPW.value;

    if (checkConfrimPW === localStorage.getItem("pw?12")) {
        pwField.style.display = "none";
    } else {
        confrimPW.value = "";
    }
}

function savePassword(newState) {
    let passwordValue = pInput.value;
    localStorage.setItem("pw?12", passwordValue);
    infoTXT.style.color = "black";
    infoTXT.innerHTML = "Password saved successfully!";
    
    setTimeout(() => {
        infoTXT.innerHTML = "";
    }, 5000)
}

function deletePassword() {
    if (localStorage.getItem("pw?12") === 'pwo$18') {
        infoTXT.style.color = "red";
        infoTXT.innerHTML = "Password has already been deleted!";
    } else {
        localStorage.setItem("pw?12", "pwo$18");
        infoTXT.style.color = "red";
        infoTXT.innerHTML = "Password has been deleted!";
    }

    setTimeout(() => {
        infoTXT.innerHTML = "";
    }, 5000)
}