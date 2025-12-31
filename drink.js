class Drink {
  #temperature
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature
  }
  getInfo() {
    console.log(`${this.name} стоит ${this.price}$ в объеме ${this.size} мл`)
  }
  getTemperature() {
    console.log(this.#temperature)
  }
  establishTemperature(newTemperature) {
    this.#temperature = newTemperature
  }
  #prepareDrink() {
    this.getInfo();
    this.getTemperature();
    this.establishTemperature();
    console.log(`${this.name} готовится. готово`)
  }
  giveDrink() {
    this.#prepareDrink()
    console.log(`напиток готов, можете забирать!`)
  }
}
class Limonad extends Drink {
  constructor(name, size, price, temperature, carbonation, color) {
    super(name, size, price, temperature)
    this.carbonation = carbonation;
    this.color = color;
  }
}


class Coffee extends Drink {
  constructor(name, size, price, temperature, roasting, strength) {
    super(name, size, price, temperature)
    this.roasting = roasting;
    this.strength = strength;
  }
}



class Tea extends Drink {
  constructor(name, size, price, temperature, sweetness, strength) {
    super(name, size, price, temperature)
    this.sweetness = sweetness;
    this.strength = strength;
  }
}


class Soda extends Drink {
  constructor(name, size, price, temperature, carbonation, taste) {
    super(name, size, price, temperature)
    this.carbonation = carbonation;
    this.taste = taste
  }
}


const limonad = new Limonad('холодный лимонад', '400', '2', '0', 'среднегазированный', 'зеленый')
const coffee = new Coffee('экспрессо', '200', '1.5', '0', 'средняя обжарка', 'крепкий')
const tea = new Tea('чай с лимоном', '350', '1', '0', 'сладкий', 'некрепкий')
const soda = new Soda('газированный напиток', '450', '0.5', '0', 'сильногазированный', 'клубничный')


class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location
  }
  getInfo() {
    console.log(`${this.name} - это кафе, которая основана магнатом Владиславом Бабенко
     и находиться это кафе по адресу ${this.location}.`);
  }
  orderDrink(drink) {
    drink.giveDrink()
    console.log(`в ${this.name} сделали заказ на ${this.drink.name}`)
  }
}
const CafeVladislava = new Cafe('Кафе у моря', 'Дагестан, город Буйнакск...')