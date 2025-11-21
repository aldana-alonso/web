// Lightbox para afiches

const afiches = document.querySelectorAll(".afiche");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

afiches.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});
