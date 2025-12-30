//создать класс который будет
//1) открывать модалку
// 2) закрыть модалку через кнопку регистрация
// 3) проверить открыта ли модалка 
// 4) закрыть модалку через кнопку X
export class Modal {
  constructor(id) {
    this.id = id
    this.openButton = document.querySelector('#penalties')
    this.closeBudottonRegist = document.querySelector('.modal-button')
    this.overlay = document.querySelector('#overlay')
    this.closeButtonX = document.querySelector('.close-button')
    this.modal = document.querySelector('.modal');
  }
  openModal() {
    this.openButton.addEventListener('click', ()=> {
      this.modal.classList.add('showed')
      this.overlay.classList.add('active')
    })}
  closeModal() {
    this.closeBudottonRegist.addEventListener('submit', ()=> {
      this.modal.classList.remove('showed')
      this.overlay.classList.remove('active')
    })}
  checkOpen() {
    if (this.modal.openModal()) {
      console.log('модалка открыта')
    }
    else {
      console.log('модалка закрыта')
    }}  
  listenerButton() {
    this.closeButtonX.addEventListener('click', ()=> {
      this.modal.classList.remove('showed')
      this.overlay.classList.remove('active')
  })}
}
const modalPenalties = new Modal('1')
modalPenalties.openModal()