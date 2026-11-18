// Theme Toggle
const themebutton = document.getElementById("theme-button");

themebutton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themebutton.textContent = "☾ Dark";
    } else {
        themebutton.textContent = "☀ Light";
    }
});
