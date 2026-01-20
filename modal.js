//создать класс который будет
//1) открывать модалку
// 2) закрыть модалку через кнопку регистрация
// 3) проверить открыта ли модалка 
// 4) закрыть модалку через кнопку X

export class Modal {

  constructor(id) {
    this.id = document.querySelector(id);
    this.openButton = document.querySelector('#penalties');
    this.closeBudottonRegist = document.querySelector('.modal-button');
    this.overlay = document.querySelector('#overlay');
    this.closeButtonX = document.querySelector('.close-button');
    this.modal = document.querySelector('.modal');
  }

  open() {
    this.openButton.addEventListener('click', () => {
      this.modal.classList.add('modal-showed');
      this.overlay.classList.add('overlay-showed');
    });
  }

  close() {
    this.id.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  listenerButton() {
    this.closeButtonX.addEventListener('click', ()=> {
      this.id.classList.remove('showed');
      this.overlay.classList.remove('active');
    });
  }
}