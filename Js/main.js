// ===============================
// MENÚ ACTIVO
// ===============================
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===============================
// LIGHTBOX GENERAL
// ===============================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

if (lightbox && lightboxImg) {
  const allImages = document.querySelectorAll(".slide, .foto-proyecto");
  allImages.forEach(img => img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  }));

  document.querySelector(".lightbox .close").addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
}

// ===============================
// CARRUSEL PRINCIPAL
// ===============================
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slides.length > 0 && nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  });

  prevBtn.addEventListener("click", () => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
  });
}

// ===============================
// CARRUSEL DE MOCKUPS
// ===============================
const brandingSlides = document.querySelectorAll(".carrusel-mockups .slide");
if (brandingSlides.length > 0) {
  let brandingIndex = 0;
  const nextBtnMock = document.querySelector(".carrusel-mockups .next");
  const prevBtnMock = document.querySelector(".carrusel-mockups .prev");

  if (nextBtnMock && prevBtnMock) {
    nextBtnMock.addEventListener("click", () => {
      brandingSlides[brandingIndex].classList.remove("active");
      brandingIndex = (brandingIndex + 1) % brandingSlides.length;
      brandingSlides[brandingIndex].classList.add("active");
    });

    prevBtnMock.addEventListener("click", () => {
      brandingSlides[brandingIndex].classList.remove("active");
      brandingIndex = (brandingIndex - 1 + brandingSlides.length) % brandingSlides.length;
      brandingSlides[brandingIndex].classList.add("active");
    });
  }
}
