
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;

function showSlide(index) {
  const carousel = document.querySelector(".carousel");
  currentIndex = (index + totalSlides) % totalSlides;
  const offset = -currentIndex * 100; 
  carousel.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

setInterval(() => moveSlide(1), 3000);
