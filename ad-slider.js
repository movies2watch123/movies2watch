const slides = document.querySelectorAll(".ad-banner-slider .slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Loop through slides
  showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
