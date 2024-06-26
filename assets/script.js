const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const allDots = document.querySelectorAll(".dot");
const bannerImg = document.querySelector(".banner-img");

let defaultIndex = 0;

// Function to update bullet points
function dotUpdate() {
  allDots.forEach((dot, index) => {
    if (index === defaultIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Function to update the banner images and text
function carouselUpdate(index, direction) {
  // Condition for the carousel to be infinite
  if (defaultIndex === -1 && direction === "left") {
    defaultIndex = slides.length - 1;
  } else if (defaultIndex === slides.length && direction === "right") {
    defaultIndex = 0;
  }

  // Update img
  const selectImg = `assets/images/slideshow/${slides[defaultIndex].image}`;
  bannerImg.src = selectImg;

  // Update text
  const selectTxt = slides[defaultIndex].tagLine;
  document.querySelector("p").innerHTML = selectTxt;
}

// Click event arrow left
arrowLeft.addEventListener("click", (e) => {
  defaultIndex--;
  carouselUpdate(defaultIndex, "left");
  dotUpdate(defaultIndex);
});

// Click event arrow right
arrowRight.addEventListener("click", (e) => {
  defaultIndex++;
  carouselUpdate(defaultIndex, "right");
  dotUpdate(defaultIndex);
});
