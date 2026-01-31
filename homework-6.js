//создать объект на основе своих данных

const aboutMe = {
  name: 'ibragim',
  work: 'not work',
  age: 15,
  phone: 'oppo',
  country: 'russia',
  status: 'student'
}
//сщздать объект с данными автомобиля и со свойством 'владелец '
const car = {
  stamp: 'lada',
  model: 'granta',
  colour: 'blue',
  viewBox: 'mechanics',
}
car.owner = aboutMe


//задача с максимальной скоростью
const searchMaxSpeed = (car) => {
  if (!car.hasOwnProperty('maxSpeed')) {
    car.maxSpeed = '180 км/ч'
  }
}
searchMaxSpeed(car)

//создать массив с названиями продуктов
const cards = [
  'увлажняющий мусс',
  'Увлажняющая маска',
  'Гель для умывания',
  'Подарочный набор №1',
  'Подарочный набор №5'
]

//задача с книгами 
const literalBooks = [
  {
    name: 'война и мир',
    autor: 'Л.Н.Толстой',
    yearRelease: 1869,
    color: 'коричневый',
    genre: 'реализм'
  },
  { 
    name: 'Капитанская дочка',
    autor: 'А.С.Пушкин',
    yearRelease: 1837,
    color: 'золотистый',
    genre: 'роман',
  },
  {
    name: 'Дубровский',
    autor: 'А.С.Пушкин',
    yearRelease: 1833,
    color: 'синий',
    genre: 'роман',
  }
] 

const fantasyBooks = [
  {
    name: 'Властелин колец',
    autor: 'Джон Р.Р.',
    yearRelease: 1954,
    color: 'красный',
    genre: 'фентези'
  },
  { 
    name: 'последнее желание',
    autor: 'Анджей Сапковский',
    yearRelease: 1993,
    color: 'черный',
    genre: 'фентези',
  },
  {
    name: 'имя ветра',
    autor: 'Патрик Ротфус',
    yearRelease: 2007,
    color: 'темно-зеленый',
    genre: 'фентези',
  }
] 

const allBoocks = { ...literalBooks, ...fantasyBooks}
//задача с map
const bringRareBook = () => allBoocks.map(book => ({ ...book, isRare: book.yearRelease >= 2000 })) 
