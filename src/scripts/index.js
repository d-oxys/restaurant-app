import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".navContent");

hamburger.addEventListener("click", () => {
  navContent.classList.toggle("active");
  hamburger.classList.toggle("active");
});

console.log("Hello Coders! :)");
