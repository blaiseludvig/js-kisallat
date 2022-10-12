import "./style.css";
// import { animateCSS } from "./animatecss";

let images = document.querySelectorAll("#food-grid > img");
let food_list = document.querySelector("#food-list");
let calories = document.querySelector("#calories");
let reset = document.querySelector("#reset");

images.forEach((img) => {
  img.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = `${img.dataset.foodname} <i>(${img.dataset.calories})</i>`;

    calories.textContent = parseInt(img.dataset.calories);

    food_list.appendChild(li);

  });
});

reset.addEventListener("click", () => {
  food_list.innerHTML = "";
})