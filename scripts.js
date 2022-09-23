import data from "./data.js";

const itemsContainer = document.querySelector("#items");
const itemList = document.getElementById("item-list"); // grabs the id from the html doc
const cartQuantity = document.getElementById("cart-quantity");
const cartTotal = document.getElementById("total");

// the length of our data determines how many times this loop goes around
const jsonLength = data.length;

for (let i = 0; i < data.length; i += 1) {
  // create a new div element and give it a class name
  const newDiv = document.createElement("div");
  newDiv.className = "item";
  // create an image element
  const img = document.createElement("img");
  // this will change each time we go through the loop. Can you explain why?
  img.src = data[i].image;
  img.width = 300;
  img.height = 300;
  // Add the image to the div
  newDiv.appendChild(img);
  console.log(img); // Check the console!
  itemsContainer.appendChild(newDiv);

  // create a p tag element for description from data.js file
  const desc = document.createElement("P");
  desc.innerText = data[i].desc;
  newDiv.appendChild(desc);

  // create a p tag element for price from data.js
  const price = document.createElement("P");
  price.innerText = data[i].price;
  newDiv.appendChild(price);

  // create a button with text 'Add to cart'
  const button = document.createElement("button");
  button.id = data[i].name;

  //creates custom attribute called data-price and extracts the price value from data.js
  button.dataset.price = data[i].price;
  button.innerHTML = "Add to Cart";
  newDiv.appendChild(button);
}

const cart = [];
// _____________________________________________________________
// add items to cart
function addItem(name, price) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty += 1;
      return;
    }
  }
  const item = { name, price, qty: 1 };
  cart.push(item);
}

// _____________________________________________________________
//show items
function showItems() {
  // console.log(`You have ${getQty()} items in your cart`);
  cartQuantity.innerHTML = `You have ${getQty()} items in your cart`;

  let itemStr = "";
  for (let i = 0; i < cart.length; i++) {
    // console.log(`-  ${cart[i].name} ${cart[i].price} x ${cart[i].qty}`);
    let itemTotal = cart[i].price * cart[i].qty;

    itemStr += `<li>${cart[i].name} $${cart[i].price} x ${
      cart[i].qty
    } = ${itemTotal.toFixed(2)}</li>`;
  }
  itemList.innerHTML = itemStr; // goes into the item list id and adds a <li> tag

  // console.log(`Total in cart: $${getTotal()}`);
  cartTotal.innerHTML = `Total in cart: $${getTotal()}`;
}
// ____________________________________________________________
// get totals
function getTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i].price * cart[i].qty;
  }
  return total.toFixed(2);
}

// get quantities
function getQty() {
  let qty = 0;

  for (let i = 0; i < cart.length; i += 1) {
    qty += cart[i].qty;
  }
  return qty;
}

// remove items from cart
function removeItem(name, qty = 0) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name.toLowerCase() === name.toLowerCase()) {
      if (qty > 0) {
        cart[i].qty -= qty;
      }
      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1); // start at index i, and remove that 1 singular item.
        return;
      }
    }
  }
}

// 4 apples, 2 orange, 1 iPhone
addItem("Apple", 0.99);
addItem("Apple", 0.99);
addItem("Apple", 0.99);
addItem("Orange", 1.29);
addItem("Orange", 1.29);
addItem("Apple", 0.99);
addItem("iPhone", 890.99);
addItem("Water Bottle", 5.99);
removeItem("apple", 1);
removeItem("orange", 1);

showItems();

console.log(itemList);
