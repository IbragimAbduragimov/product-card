import { Drink } from "./drink.js";

class Tea extends Drink {
  constructor(name, size, price, temperature, sweetness, strength) {
    super(name, size, price, temperature);
    this.sweetness = sweetness;
    this.strength = strength;
  }
  getFullInformation() {
    console.log(this.name, this.size, this.price, this.temperature, this.sweetness, this.strength);
  }
}

const lemonad = new Limonad('холодный лимонад', '400', '2', '0', 'среднегазированный', 'зеленый');