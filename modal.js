//создать класс который будет
//1) открывать модалку
// 2) закрыть модалку через кнопку регистрация
// 3) проверить открыта ли модалка 
// 4) закрыть модалку через кнопку X

export class Modal {

  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeButton = this.modal.querySelector('.close-button');
  }

  open() {
    this.modal.classList.add('showed');
    this.overlay.classList.add('active');
  }

  close() {
    this.modal.classList.remove('showed');
    this.overlay.classList.remove('active');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  listenerButton() {
    this.closeButtonX.addEventListener('click', ()=> {
      this.modal.classList.remove('showed');
      this.overlay.classList.remove('active');
    });
  }
}
