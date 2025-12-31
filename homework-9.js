
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

const modalLogin = document.querySelector('.modal-login')
const modalPassword = document.querySelector('.modal-password')
const loginInput = document.querySelector('login-input')
const closeButton = document.querySelector('.close-button')
closeButton.addEventListener('click', () => {
  modal.classList.remove('showed')
  overlay.classList.remove('active')
})

//добавить поле для регистрации праверить валидность формы и идентичность паролей
//также вывести все это в консоль лог




const form = document.querySelector('.modal-form')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    name: document.querySelector('.name-input').value,
    surname:  document.querySelector('.surname-input').value,
    data:  document.querySelector('.date-input').value,
    login:  document.querySelector('.login-input').value,
    password:  document.querySelector('.password-input').value,
    password2:  document.querySelector('.password2-input').value,
  } 
  if (formData.password !== formData.password2) {
    console.log('пароли не совпадают или форма не валидна')
  } 
  else {
    console.log(formData)
  }
})
