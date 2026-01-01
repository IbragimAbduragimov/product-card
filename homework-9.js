
//сделал так чтобы при отправке через кнопку не перезагружалась и
//выводилась в консоль лог
const emailForm = document.getElementById('email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const emailData = Object.fromEntries(formData.entries());
  console.log(emailData);
});


//сделать модалку которая открывается при нажатии на кнопку, добавить overlay
//и чтобы при нажатии на кнопку закрытия она закрывалась
const openModalButton = document.querySelector('#penalties')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay')
openModalButton.addEventListener('click', () => {
  modal.classList.add('showed')
  overlay.classList.add('active')
})

const closeButton = document.querySelector('.close-button')
closeButton.addEventListener('click', () => {
  modal.classList.remove('showed')
  overlay.classList.remove('active')
})

//добавить поле для регистрации праверить валидность формы и идентичность паролей
//также вывести все это в консоль лог
const passwordModal = document.querySelector('.password-input')
const password2Modal = document.querySelector('.password2-input')
let user = undefined;

const modalForm = document.getElementById('modal-form')
modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (passwordModal.value !== password2Modal.value || !modalForm.checkValidity()) {
    console.log('пароли не совпадают или форма не валидна')
  } 
  else {
    const form = event.target
    const data = new FormData(form)
    user = Object.fromEntries(data.entries())
    console.log(user)
  }
})
3