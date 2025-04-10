const signInBtn = document.getElementById("signIn");
const loginSection = document.getElementById("login");
const screenOpacity = document.getElementById("blackscreen");

signInBtn.addEventListener("click", function () {
    loginSection.classList.add("show"); 
    screenOpacity.style.display = "flex"; 
});

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", function () {
    loginSection.classList.remove("show"); 
    screenOpacity.style.display = "none"; 
});
