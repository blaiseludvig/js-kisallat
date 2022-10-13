export class Food {
  name;
  calories;

  constructor(name, calories) {
    this.name = name;
    this.calories = parseInt(calories);
  }
}