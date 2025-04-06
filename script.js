const cookieModal = document.querySelector(".cookieModal");
const modalContent = document.querySelector(".modalContent");
const message = document.querySelector("#cookieRejectMessage");
const acceptBtn = document.querySelector("#acceptCookies");
const rejectBtn = document.querySelector("#rejectCookies");

window.addEventListener("load", () => {
    setTimeout(() => {
        cookieModal.style.display = "flex";
        void cookieModal.offsetWidth;
        cookieModal.classList.add("show");
    }, 750);
});

acceptBtn.addEventListener("click", function () {
    cookieModal.style.display = "none"; 
});

rejectBtn.addEventListener("click", function () {
    cookieModal.style.display = "none"; 
    message.style.display = "flex"; 
    
});
