import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".navContent");
const content = document.querySelector(".navbar");
const viewportHeight = window.innerHeight;

let contentVisible = false;

function toggleContentVisibility() {
  if (window.scrollY >= viewportHeight && !contentVisible) {
    content.style.display = "flex";
    content.classList.remove("animate-out");
    content.classList.add("animate-in");
    contentVisible = true;
  } else if (window.scrollY < 1 && contentVisible) {
    content.style.display = "none";
    content.classList.remove("animate-in");
    content.classList.add("animate-out");
    contentVisible = false;
  }
}

hamburger.addEventListener("click", () => {
  navContent.classList.toggle("active");
  hamburger.classList.toggle("active");
});

console.log("Hello Coders! :)");
window.addEventListener("scroll", toggleContentVisibility);
