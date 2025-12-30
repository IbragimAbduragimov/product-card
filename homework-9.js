import './homework-10.js'
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



let user

const login = document.querySelector('.login-input').value;
const password = document.querySelector('.password-input')
const confirmPassword = document.querySelector('.password2-input');
const registForm = document.querySelector('#form-container');

registForm.addEventListener('submit', (event) => {
  event.preventDefault();
    if (password.value !== confirmPassword.value) {
      alert('Пароли не совпадают');
  }
    else {
      console.log('все норм')
    };

  const form = event.target;
  const data = new FormData(form);
  user = Object.fromEntries(data.entries());
  user.createdOn  = new Date();
  console.log(user);
});