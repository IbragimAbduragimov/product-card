//№1 кнопка которая меняет цвет карточки

const ColorCard = document.querySelector('.card-container');
const changeColorCardButton = document.querySelector('#color-card-button');

changeColorCardButton.addEventListener('click', () => {
  ColorCard.style.backgroundColor = 'red';
})

//№2 кнопка которая меняет цвет всех карточек

const ColorCards = document.querySelectorAll('.card-container')
const changeColorCardsButton = document.querySelector('#color-cards-button');


changeColorCardsButton.addEventListener('click', () => {
ColorCards.forEach((cards) => cards.style.backgroundColor = 'blue')
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

outputLogMessageButton.addEventListener('click', () => outpytConsoleLog('ДЗ №4'))

function outpytConsoleLog(message) {
  alert(message)
  console.log(message)
}

//№5 при наведении на заголовок в консоли выводится контент элемента

const changeТheСolor = document.querySelector('.main-title');
changeТheСolor.addEventListener('mouseover', function () {
  console.log(this.textContent);
})

//№6 кнопка которая меняет свой цвет при каждом нажатии

const colorButtonAlternation = document.querySelector('#color-change');
colorButtonAlternation.addEventListener('click', function (){
  colorButtonAlternation.classList.toggle('green');
})