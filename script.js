const cookieModal = document.querySelector(".cookieModal");
const modalContent = document.querySelector(".modalContent");
const message = document.querySelector("#cookieRejectMessage");
const acceptBtn = document.querySelector("#acceptCookies");
const rejectBtn = document.querySelector("#rejectCookies");

acceptBtn.addEventListener("click", function () {
    cookieModal.style.display = "none"; 
});

rejectBtn.addEventListener("click", function () {
    cookieModal.style.display = "none"; 
    message.style.display = "flex"; 
    
});
