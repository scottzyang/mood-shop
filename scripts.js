import data from './data.js'

const itemsContainer = document.querySelector('#items')

// the length of our data determines how many times this loop goes around
const jsonLength = data.length;


for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image
	img.width = 300
	img.height = 300
	// Add the image to the div
	newDiv.appendChild(img)
	console.log(img) // Check the console!
	itemsContainer.appendChild(newDiv)

    // create a p tag element for description from data.js file
    const desc = document.createElement('P')
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)

    // create a p tag element for price from data.js
    const price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    // create a button with text 'Add to cart'
    const button = document.createElement('button')
    button.id = data[i].name

    //creates custom attribute called data-price and extracts the price value from data.js
    button.dataset.price = data[i].price
    button.innerHTML = 'Add to Cart'
    newDiv.appendChild(button)
}