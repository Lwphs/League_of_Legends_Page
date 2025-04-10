const checkbox = document.getElementById("checkbox");
const root = document.querySelector(":root");
const logoRiot = document.getElementById("logo");

function applyTheme(isChecked) {
    if (isChecked) {
        root.style.setProperty('--black', 'rgb(207, 220, 231)');
        root.style.setProperty('--white', 'rgb(7, 6, 19)');
        root.style.setProperty('--gold', 'rgb(253, 175, 5)');
        root.style.setProperty('--footer', 'rgb(231, 230, 238)');
        root.style.setProperty('--header', 'rgb(231, 231, 231)');

        root.style.setProperty('--bg-opacity', '0.175');
    } else {
        root.style.setProperty('--black', 'rgb(7, 6, 19)');
        root.style.setProperty('--white', 'rgb(228, 228, 227)');
        root.style.setProperty('--gold', 'rgb(236, 173, 0)');
        root.style.setProperty('--footer', 'rgb(10, 8, 27)');
        root.style.setProperty('--header', 'rgb(7, 6, 19)');

        root.style.setProperty('--bg-opacity', '0.1');
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("themeMode");
    const isChecked = savedTheme === "true";
    checkbox.checked = isChecked;
    applyTheme(isChecked);
});

checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;
    localStorage.setItem("themeMode", isChecked);
    applyTheme(isChecked);
});