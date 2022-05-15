const fs = require('fs');
const cart = require('./read');

function create(product) {
    cart() // if cart === '', creating '[]'

    const newCart = JSON.parse(cart());
    
    newCart.push(product)
    fs.writeFileSync('./data/cart.json', JSON.stringify(newCart))
    
console.log(newCart);
}

module.exports = create;