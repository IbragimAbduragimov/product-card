import { Drink } from "./drink.js";

class Lemonad extends Drink {
  constructor(name, size, price, temperature, carbonation, color) {
    super(name, size, price, temperature);
    this.carbonation = carbonation;
    this.color = color;
  }
  getFullInformation() {
    console.log(this.name, this.size, this.price, this.temperature, this.carbonation, this.color);
  }
}

const lemonad = new Limonad('холодный лимонад', '400', '2', '0', 'среднегазированный', 'зеленый');