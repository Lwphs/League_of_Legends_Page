const cookieModal = document.querySelector(".cookieModal");
const modalContent = document.querySelector(".modalContent");
const message = document.querySelector("#cookieRejectMessage");
const acceptBtn = document.querySelector("#acceptCookies");
const rejectBtn = document.querySelector("#rejectCookies");

const consentKey = "cookiesConsent";

window.addEventListener("load", () => {
    const consent = localStorage.getItem(consentKey);
    if (!consent || consent == "rejected") {
        setTimeout(() => {
            cookieModal.style.display = "flex";
            void cookieModal.offsetWidth;
            cookieModal.classList.add("show");
        }, 750);
    }
});

acceptBtn.addEventListener("click", function () {
    localStorage.setItem(consentKey, "accepted");
    cookieModal.style.display = "none"; 
});

rejectBtn.addEventListener("click", function () {
    localStorage.setItem(consentKey, "rejected");
    cookieModal.style.display = "none"; 
    message.style.display = "flex"; 
});
