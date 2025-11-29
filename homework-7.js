
//создать массив чисел от 1 до 10 потом отфильтровать их так чтобы они начинались от 5

const numbers = [1,2,3,4,5,6,7,8,9,10]
const filterNumbers = numbers.filter (number => number >= 5)

//создать массив из разных предметов и проверить есть ли в массиве определенная сущность

const random = ['knite', 'sofa', 'phone', 'copybook']


//написать функцию которая аргументом будет принимать массивы и переворачиать их
numbers.reverse()
random.reverse()

//импортировать comment.js
import { exampleComment } from "./comments.js"
const filterCommentEmail = exampleComment.filter(comment => comment.email.includes('.com'));
console.log(filterCommentEmail)

//у пользователей с id меньше 5, postId будет = 2, а которых > 5 = 1 postId 

const changeId = exampleComment.map(comment => ({
  ...exampleComment, postId: exampleComment.id <= 5 ? 2 : 1
}))

console.log(changeId)

//задача в котором нужно перебрать массив таким образом чтобы он состоял из айди и имени

const leaveIdNameId = exampleComment.map(comment => ({
  id: comment.id,
  name: comment.name
}))

//добавить свойство которое измеряет размер сообщения и если объект > 180 = true

const MeasureLengthComments = exampleComment.map(comment => ({
  islnvalid: JSON.stringify(product).length > 180 ? true : false
}))

  //вывести с помощью способа reduce в лог массив
exampleComment.reduce((Acc,  current) => {
  console.log(current);
  return Acc;
}, null)

//вывести в лог массив с помощью методов toString и join
console.log(exampleComment.toString())
console.log(exampleComment.join())