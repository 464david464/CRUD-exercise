const fs = require('fs');
const read = require('./read');

function create(product) {
    read() // if cart === '', creating '[]'

    const newCart = JSON.parse(read());
    
    newCart.push(product)
    fs.writeFileSync('./data/cart.json', JSON.stringify(newCart))
    
console.log(newCart);
}

module.exports = create;
