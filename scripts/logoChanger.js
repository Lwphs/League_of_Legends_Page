const logo = document.getElementById("logo");

const logoWhite = "assets/riot-games-rgb-logos-web/002_RG_2021_FULL_LOCKUP_OFFWHITE.png";
const logoRed = "assets/riot-games-rgb-logos-web/002_RG_2021_FULL_LOCKUP_RED.png";

logo.addEventListener("mouseenter", () => {
  logo.src = logoRed; 
});

logo.addEventListener("mouseleave", () => {
  logo.src = logoWhite;  
});
