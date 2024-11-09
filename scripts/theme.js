let BGtheme = localStorage.getItem("themeColor");
document.body.style.backgroundColor = BGtheme;

function lightMode() {
    BGtheme = '#fff';
    localStorage.setItem("themeColor", BGtheme);
    document.body.style.backgroundColor = BGtheme;
}

function darkMode() {
    BGtheme = '#222';
    localStorage.setItem("themeColor", BGtheme);
    document.body.style.backgroundColor = BGtheme;
}