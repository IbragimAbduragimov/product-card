//задание с вывоводом в лог температуры города

function determineWeather(city, temperature) {
  console.log(`сейчас в ${city} температура - ${temperature} градуса по Цельсию`  )
}

determineWeather('Чили','55')

//задача с значением скорости звука

let SPEED_SOUND = 343
function detectionSound() {

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

detectionSound()

//задача со своим продуктом

const product = 'chips' 
const price = 200
function calculatePrice(budget) {
  if (budget >= price) {
    console.log('chips приобретён. Спасибо за покупку!')
  }
  else {
    const computers = price - budget
    console.log(`вам не хватает ${computers} $, пополните баланс`)
  }
}

calculatePrice('250')

//создать одну функцию

function measureStrength() {
  const woodStrength = 90;
  if (woodStrength >= 100) {
    console.log('этот материал обладает сильной прочностью')
  }
  else (woodStrength < 100); {
    console.log('этот материал не обладает достаточной прочностью.')
  }
}

measureStrength()



//создать 3 переменных
const age = 15
const name = 'ibragim'
const mentor = 'vladislavBabenko'