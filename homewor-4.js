//№1 кнопка которая меняет цвет карточки

const productCard = document.querySelector('.card-container');
const changeColorCardButton = document.querySelector('#change-color-card');

changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = 'red';
})

//№2 кнопка которая меняет цвет всех карточек

const productCards = document.querySelectorAll('.card-container')
const changeColorCardsButton = document.querySelector('#change-color-all-cards');


changeColorCardsButton.addEventListener('click', () => {
productCards.forEach((cards) => cards.style.backgroundColor = 'blue')
});

//№3 кнопка котрая открывает google.com
const openGoogleButton = document.querySelector('#open-google')

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open('https://google.com')
  }
}

  //№4 кнопка для вывода сообщения в лог и консоль

const outputLogMessageButton = document.querySelector('#output-message-log');

outputLogMessageButton.addEventListener('click', () => showMessage('ДЗ №4'))

function showMessage(message) {
  alert(message)
  console.log(message)
}

//№5 при наведении на заголовок в консоли выводится контент элемента

const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseover', function () {
  console.log(this.textContent);
})

//№6 кнопка которая меняет свой цвет при каждом нажатии

const colorButtonAlternation = document.querySelector('#toggle-color-button');
colorButtonAlternation.addEventListener('click', function() {
  colorButtonAlternation.classList.toggle('bg-green');
})

