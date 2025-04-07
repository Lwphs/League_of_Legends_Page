const signInBtn = document.getElementById("signIn");
const loginSection = document.getElementById("login");
const screenOpacity = document.getElementById("blackscreen");

signInBtn.addEventListener("click", function () {
    loginSection.classList.add("show"); // Añadimos la clase para hacer que se muestre
    screenOpacity.style.display = "flex"; 
});
