import { Drink } from "./drink.js";

class Coffee extends Drink {
  constructor(name, size, price, temperature, roasting, strength) {
    super(name, size, price, temperature);
    this.roasting = roasting;
    this.strength = strength;
  }
  getFullInformation() {
    console.log(this.name, this.size, this.price, this.temperature, this.roasting, this.strength);
  }
}

const coffee = new Coffee('экспрессо', '200', '1.5', '0', 'средняя обжарка', 'крепкий');