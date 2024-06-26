const button = document.querySelector(".header_burger-button");
const nav = document.querySelector(".header_navigation"); // Исправлено на правильное название класса

button.addEventListener("click", () => {
  nav.classList.toggle("--open"); // Исправлено на метод `classList.add`
  button.classList.toggle("--burger-open");
});

const slider = document.querySelector(".slide-list");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".--left");
const nextButton = document.querySelector(".--right");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

function updateSliderPosition() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
}

setInterval(autoSlide, 3000);
