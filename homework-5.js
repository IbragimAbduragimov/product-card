//задание с вывоводом в лог температуры города

function determineWeather(city, temperature) {
  console.log(`сейчас в ${city} температура - ${temperature} градуса по Цельсию`  )
}

determineWeather('Чили','55')

//задача с значением скорости звука

function detectionSound(SPEED_SOUND) {

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

detectionSound(343)

//задача со своим продуктом

const product = 'chips' 
const price = 200
function buyProduct(budget) {
  if (budget >= price) {
    console.log('chips приобретён. Спасибо за покупку!')
  }
  else {
    const computers = price - budget
    console.log(`вам не хватает ${computers} $, пополните баланс`)
  }
}

buyProduct(250)

//создать одну функцию

function measureStrength(woodStrength) {
  if (woodStrength >= 100) {
    console.log('этот материал обладает сильной прочностью')
  }
  else (woodStrength < 100); {
    console.log('этот материал не обладает достаточной прочностью.')
  }
}

measureStrength(90)



//создать 3 переменных
const age = 15
const name = 'ibragim'
const mentor = 'vladislavBabenko'