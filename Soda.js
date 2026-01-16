import { Drink } from "./Drink.js";

class Soda extends Drink {
  constructor(name, size, price, temperature, carbonation, taste) {
    super(name, size, price, temperature);
    this.carbonation = carbonation;
    this.taste = taste;
  }
  getFullInformation() {
    console.log(this.name, this.size, this.price, this.temperature, this.carbonation, this.taste);
  }
}
