const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

const bgVideo = document.getElementById("bgvideo");
const videoSource = bgVideo.querySelector("source");

const aram = "assets/videos/aramDemo.mp4";
const rift = "assets/videos/riftDemo.mp4";
const arena = "assets/videos/arenaDemo.mp4";

const aramBg = "assets/AramBg.jpg";
const riftBg = "assets/riftBg.jpg";
const arenaBg = "assets/ArenaBg.jpg";

const bgImage = document.getElementById("info");

window.addEventListener("load", function () {
    const img2 = item2.querySelector("img");
    img2.style.filter = "grayscale(0)";
    img2.style.transform = "scale(1.4)";
});

item1.addEventListener("click", function () {
    const img1 = item1.querySelector("img");

    if (img1.style.transform !== "scale(1.4)") {
        img1.style.filter = "grayscale(0)";
        img1.style.transform = "scale(1.4)";

        const img2 = item2.querySelector("img");
        img2.style.filter = "grayscale(100%)";
        img2.style.transform = "scale(1)";

        const img3 = item3.querySelector("img");
        img3.style.filter = "grayscale(100%)";
        img3.style.transform = "scale(1)";

        videoSource.src = aram;
        bgVideo.load();
        bgVideo.play();

        bgImage.style.setProperty('--mode-bg', `url(${aramBg})`);
    }
});

item2.addEventListener("click", function () {
    const img2 = item2.querySelector("img");

    if (img2.style.transform !== "scale(1.4)") {
        const img1 = item1.querySelector("img");
        img1.style.filter = "grayscale(100%)";
        img1.style.transform = "scale(1)";

        img2.style.filter = "grayscale(0)";
        img2.style.transform = "scale(1.4)";

        const img3 = item3.querySelector("img");
        img3.style.filter = "grayscale(100%)";
        img3.style.transform = "scale(1)";

        videoSource.src = rift;
        bgVideo.load();
        bgVideo.play();

        bgImage.style.setProperty('--mode-bg', `url(${riftBg})`);
    }
});

item3.addEventListener("click", function () {
    const img3 = item3.querySelector("img");

    if (img3.style.transform !== "scale(1.4)") {
        const img1 = item1.querySelector("img");
        img1.style.filter = "grayscale(100%)";
        img1.style.transform = "scale(1)";

        const img2 = item2.querySelector("img");
        img2.style.filter = "grayscale(100%)";
        img2.style.transform = "scale(1)";

        img3.style.filter = "grayscale(0)";
        img3.style.transform = "scale(1.4)";

        videoSource.src = arena;
        bgVideo.load();
        bgVideo.play();

        bgImage.style.setProperty('--mode-bg', `url(${arenaBg})`);
    }
});
