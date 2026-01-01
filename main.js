import './comments.js'
import './homewor-4.js'
import './homework-5.js'
import './homework-6.js'
import './homework-7.js'
import './homework-8.js'
import './homework-9.js'
import './modal.js'
import './form.js'

//по аналогии из лекции создать такой же шаблон
class Gadjet {
  constructor(name, brand) {
    this.name = name
    this.brand = brand
  }
} 

class Phone extends Gadjet {
  constructor(name, brand, display) {
  super(name, brand)
  this.display = display
  }
  
  describe() {
    console.log(`${this.brand}, ${this.name}, has an ${this.display} display`)
  }
}
const Iphone = new Phone('iphone', 'iphone 13', 'OLED')
Iphone.describe()
//создать класс который будет
//1) открывать модалку
// 2) закрыть модалку через кнопку регистрация
// 3) проверить открыта ли модалка 
// 4) закрыть модалку через кнопку X

const modalPenalties = new Modal('1')
modalPenalties.openModal()
modalPenalties.checkOpen()
modalPenalties.closeModal()
modalPenalties.listenerButton()


