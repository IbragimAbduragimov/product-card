//создать класс Cafe
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