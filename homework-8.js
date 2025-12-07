import { productCards } from "./product-cards.js";
const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

function viewCards(count) {
  const showCards = productCards.slice(0, count)
  showCards.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true);
  productClone.querySelector('.product-img').src = `/images/${product.img}.png`
  productClone.querySelector('.product-category').textContent = product.category
  productClone.querySelector('.product-name').textContent = product.name
  productClone.querySelector('.product-description').textContent = product.description
  productClone.querySelector('.product-compound').innerHTML = product.compound.map(item => `<li>${item}</li>`).join("")
  productClone.querySelector('.product-price-label').textContent = product.priceLabel
  productClone.querySelector('.product-price').textContent = `${product.price} ₽`
  productList.appendChild(productClone) 
  })
}
viewCards()
const cardsName = productCards.reduce((acc, product) => (acc + (acc ? "; " : "") + product.name))
console.log(cardsName)

const namesLikeKeys = productCards.reduce((acc, product) => {
  acc.push({[product.name]: product.description})
  return acc
}, [])

console.log(namesLikeKeys)


function requestAmountCards() {
  const amount = Number(prompt('Сколько карточек отобразить? От 1 до 5'))
    if(amount >= 1 && amount <= 5) {
      viewCards(amount)
    } else {
      alert('количество карточек меньше требуемого запроса')
    } 
}

requestAmountCards();