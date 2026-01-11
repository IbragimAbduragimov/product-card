//сделал так чтобы при отправке через кнопку не перезагружалась и
//выводилась в консоль лог
let user = undefined;

function logFormData() {
  const form = event.target;
  const data = new FormData(form);
  user = Object.fromEntries(data.entries());
  return console.log(user);
}

const emailForm = document.getElementById('email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  logFormData();
});


//сделать модалку которая открывается при нажатии на кнопку, добавить overlay
//и чтобы при нажатии на кнопку закрытия она закрывалась
const openModalButton = document.querySelector('#penalties');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay');
openModalButton.addEventListener('click', () => {
  modal.classList.add('showed');
  overlay.classList.add('active');
});

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  modal.classList.remove('showed');
  overlay.classList.remove('active');
});

//добавить поле для регистрации праверить валидность формы и идентичность паролей
//также вывести все это в консоль лог
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmPassword');

const modalForm = document.getElementById('modal-form');
modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password.value !== confirmPassword.value || !modalForm.checkValidity()) {
    console.log('пароли не совпадают или форма не валидна');
  } 
  else {
    logFormData();
  }
});

