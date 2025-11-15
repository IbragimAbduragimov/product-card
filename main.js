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

const colorButtonAlternation = document.querySelector('#toogle-color-button');
colorButtonAlternation.addEventListener('click', function() {
  colorButtonAlternation.classList.toggle('bg-green');
})

//задание с вывоводом в лог температуры города

function weather(city, temperature) {
  console.log(`сейчас в ${city} температура - ${temperature} градуса по Цельсию`  )
}

weather('Чили','55')

//задача с значением скорости звука

let SPEED_SOUND= 343
function soundDetection() {

  if (SPEED_SOUND > 343) {
    console.log('Сверхзвуковая скорость')
  }
  else if (SPEED_SOUND === 343) {
    console.log('Скоростная скорость')
  }
   else {
    console.log('Дозвуковая скорость')
  }
}

soundDetection()

//задача со своим продуктом

const product = 'chips' 
const price = 200
function calculation(budget) {
  if (budget >= price) {
    console.log('chips приобретён. Спасибо за покупку!')
  }
  else {
    const computers = price - budget
    console.log(`вам не хватает ${computers} $, пополните баланс`)
  }
}

calculation('250')

//создать одну функцию

const woodStrength = 90;
function strengthmeter() {
  if (woodStrength >= 100) {
    console.log('этот материал обладает сильной прочностью')
  }
  else (woodStrength < 100); {
    console.log('этот материал не обладает достаточной прочностью.')
  }
}

strengthmeter()



//создать 3 переменных
const age = 15
const name = 'ibragim'
const mentor = 'vladislavBabenro'