let products = document.body.getElementsByTagName('li');
let cart = {
  CartListNames: document.getElementById('CartListNames'),
  CartListPrices: document.getElementById('CartListPrices'),
}
const total = document.getElementById('Total');

// Dar escucha de evento a cada checkbox para agregar/eliminar productos del carro
for (let product of products){
  let checkbox = product.children[0].getElementsByTagName('input')[0];
  let productName = product.getElementsByClassName('nombre-producto')[0].innerText;
  let productPrice = product.getElementsByClassName('precio-producto')[0].innerText;
  checkbox.addEventListener('click', () => {
    if(checkbox.checked){
      addToCart(productName, productPrice, cart);
    } else {
      removeListItemByValue(cart.CartListNames, productName);
      removeListItemByValue(cart.CartListPrices, productName);
    }
    calculate(cart,total);
  })
}

// Añadir al carrito
function addToCart(productName, productPrice, cart){
  // productName
  let productListName = document.createElement('li');
  productListName.setAttribute('value',productName);
  //productListName.style.paddingLeft = 0;

  let headerName = document.createElement('h5');
  headerName.innerText = productName;

  productListName.appendChild(headerName);

  // productPrice
  let productListPrice = document.createElement('li');
  productListPrice.setAttribute('value',productName);

  let headerPrice = document.createElement('h5');
  headerPrice.innerText = productPrice;

  productListPrice.appendChild(headerPrice);

  // add to Cart
  cart.CartListNames.appendChild(productListName);
  cart.CartListPrices.appendChild(productListPrice);
}

// Remover producto del carrito
function removeListItemByValue(ulElement, valueToRemove) {
  for (let i = 0; i < ulElement.children.length; i++) {
    const child = ulElement.children[i];
    if (child.getAttribute('value') === valueToRemove) {
      ulElement.removeChild(child);
      break;
    }
  }
}

// Calcular el precio total de un pedido
function calculate(cart, total){
  let sum = 0;
  for(let price of cart.CartListPrices.children){
    sum += stringToNumber(price.innerText);
  }
  total.innerText = numberToString(sum);
}

// Convertir una cadena en un número
function stringToNumber(str) {
  const number = Number(str.replace(/[$.]/g, ''));
  return isNaN(number) ? 0 : number;
}

// Convertir un número en una cadena con formato de la página web
function numberToString(num) {
  return num.toLocaleString('en-US', { 
    style: 'currency'
    ,currency: 'USD'
    ,useGrouping: true
    ,minimumFractionDigits: 0
    ,maximumFractionDigits: 0})
    .replace(',', '.');
}