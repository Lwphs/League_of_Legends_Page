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

closeBtn.addEventListener("mouseenter", function () {
    closeBtn.src = "assets/closeBtn_hover.svg"
});

closeBtn.addEventListener("mouseleave", function () {
    closeBtn.src = "assets/closeBtn.svg"
});
