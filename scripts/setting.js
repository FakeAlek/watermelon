// -- Page switch code

let editor = document.getElementById("Teditor");
let settings = document.getElementById("settings");
let page = true;


function switchPage() {
    if (page == true) {
        editor.style.display = "block";
        settings.style.display = "none";
    } else {
        editor.style.display = "none";
        settings.style.display = "block";
    }
}

function settingsPage() {
    page = false;
    switchPage();
}

function teditorPage() {
    page = true;
    switchPage();
}

// -- PFP code

let profilePics = document.querySelectorAll(".profile_pic");
let inputFile = document.getElementById("input_file");

inputFile.onchange = function() {
    const file = inputFile.files[0];
    const reader = new FileReader();

    file.src = URL.createObjectURL(inputFile.files[0]);

    reader.onload = function(event) {
        profilePics.forEach(pic => {
            pic.src = event.target.result;
        });
        localStorage.setItem("profilePic", event.target.result);
    };

    reader.readAsDataURL(file);
};

const savedProfilePic = localStorage.getItem("profilePic");
if (savedProfilePic) {
    profilePics.forEach(pic => {
        pic.src = savedProfilePic;
    });
}