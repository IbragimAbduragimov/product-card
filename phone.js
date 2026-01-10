import { Gadjet } from "./Gadget.js";

class Phone extends Gadjet {
  constructor(name, brand, display) {
  super(name, brand);
  this.display = display;
  }
  
  describe() {
    console.log(`${this.brand}, ${this.name}, has an ${this.display} display`);
  }
}
const Iphone = new Phone('iphone', 'iphone 13', 'OLED');