import { productCards } from "./objects.js";

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

  const renderProducts = (productCards) => {
    productCards.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.product-img').src = `images/${product.img}.png`;
    productClone.querySelector('.product-category').textContent = product.category;
    productClone.querySelector('.product-name').textContent = product.name;
    productClone.querySelector('.product-description').textContent = product.description;
    productClone.querySelector('.product-compound').innerHTML = product.compound.map(item => `<li>${item}</li>`).join("");
    productClone.querySelector('.product-price').textContent = `${product.price} ₽`;
    productList.appendChild(productClone) ;
    console.log(productClone);
  })
}
const cardsName = productCards.reduce((acc, product) => {
  acc.push(productCards.name) + ';';
  return acc;
}, [])
console.log(cardsName);

const namesLikeKeys = productCards.reduce((acc, product) => {
  acc.push({[product.name]: product.description});
  return acc;
}, [])

console.log(namesLikeKeys);

const initializeCards = () => {
  const userInput = prompt('Сколько карточек отобразить? От 1 до 5');
  const numberOfCards = Number(userInput);

  if (isNaN(numberOfCards) || numberOfCards < 1 || numberOfCards > 5) {
    alert('Пожалуйста, введите число от 1 до 5');
    return;
  }

  const selectProduct = productCards.slice(0, numberOfCards);
  renderProducts(selectProduct);
}
initializeCards();