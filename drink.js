//создать абстрактный класс drink

export class Drink {
  #temperature
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getInfo() {
    console.log(`${this.name} стоит ${this.price}$ в объеме ${this.size} мл`);
  }
  getTemperature() {
    console.log(this.#temperature);
  }
  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }
  #prepareDrink() {
    this.getInfo();
    this.getTemperature();
    this.establishTemperature();
    console.log(`${this.name} готовится. готово`);
  }
   presetDrinkDrink() {
    this.#prepareDrink();
    console.log(`напиток готов, можете забирать!`);
  }
}

//создать от них наследников