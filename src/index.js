import { Food } from "./Food";
import "./style.css";
// import { animateCSS } from "./animatecss";

let images = document.querySelectorAll("#food-grid > img");
let food_list = document.querySelector("#food-list");
let healthy_food_list = document.querySelector("#healthy-food-list");
let calories = document.querySelector("#calories");
let reset = document.querySelector("#reset");
let stats = document.querySelector("#stats");

let foods = [];

images.forEach((img) => {
  img.addEventListener("click", () => {
    let span = document.createElement("span");
    span.innerHTML = `${img.dataset.foodname} <i>(${img.dataset.calories})</i>`;

    foods.push(new Food(img.dataset.foodname, img.dataset.calories));

    calories.textContent = parseInt(calories.textContent) + parseInt(img.dataset.calories);

    food_list.appendChild(span);
  });
});

reset.addEventListener("click", () => {
  food_list.innerHTML = "";
  healthy_food_list.classList.add("hide");
  calories.textContent = 0;
  foods = [];
});

stats.addEventListener("click", () => {
  healthy_food_list.classList.remove("hide");
  healthy_food_list.innerHTML = "";
  let healthy_foods = [];

  for (const food of foods) {
    if (food.calories < 200){
      healthy_foods.push(food);
    }
  }

  healthy_foods.sort((a, b) => a.calories - b.calories);

  let healthy_foods_sum = [];

  for (const food of healthy_foods) {
    if (!(food.name in healthy_foods_sum)) {
      healthy_foods_sum[food.name] = {quantity: 0, total_calories: 0};
    }

    healthy_foods_sum[food.name].quantity += 1;
    healthy_foods_sum[food.name].total_calories += food.calories;

  }

  for (const food in healthy_foods_sum) {
    let span = document.createElement("span");
    span.textContent = `${healthy_foods_sum[food].quantity} ${food} - ${healthy_foods_sum[food].total_calories} cal`;
    healthy_food_list.appendChild(span);
  }

});