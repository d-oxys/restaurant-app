import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../public/data/DATA.json";

const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".navContent");
const content = document.querySelector(".navbar");
const viewportHeight = window.innerHeight;
const cardContainer = document.getElementById("card-container");

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
  if (navContent.classList.contains("animate-in-offcanfas")) {
    navContent.classList.remove("animate-in-offcanfas");
    navContent.classList.add("animate-out-offcanfas");
  } else {
    navContent.classList.remove("animate-out-offcanfas");
    navContent.classList.add("animate-in-offcanfas");
  }
  hamburger.classList.toggle("active");
});

hamburger.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    navContent.classList.toggle("active");
    if (navContent.classList.contains("animate-in-offcanfas")) {
      navContent.classList.remove("animate-in-offcanfas");
      navContent.classList.add("animate-out-offcanfas");
    } else {
      navContent.classList.remove("animate-out-offcanfas");
      navContent.classList.add("animate-in-offcanfas");
    }
    hamburger.classList.toggle("active");
  }
});

data.restaurants.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = item.pictureId;
  img.alt = item.name;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = item.name;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.textContent = item.description.slice(0, 150) + (item.description.length > 150 ? "..." : "");

  const cardLink = document.createElement("a");
  cardLink.classList.add("card-link");
  cardLink.href = "#";
  cardLink.textContent = "Read more";

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardDescription);
  cardContent.appendChild(cardLink);

  card.appendChild(img);
  card.appendChild(cardContent);

  cardContainer.appendChild(card);
});

console.log("Hello Coders! :)");
window.addEventListener("scroll", toggleContentVisibility);
