//сделал так чтобы при отправке через кнопку не перезагружалась и

import { Form } from "./form.js";

//выводилась в консоль лог
let user = undefined;

function getFormValue(event) {
  const form = event.target;
  const data = new FormData(form);
  const value = Object.fromEntries(data.entries());
  return value;
}

const emailForm = document.getElementById('email-form')
emailForm.addEventListener('submit', (event) => {
  console.log(getFormValue(event));
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
    user = getFormValue(event);
    console.log(user);
  }
});



