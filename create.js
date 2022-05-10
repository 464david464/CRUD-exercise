const fs = require('fs');
const cart = require('./read');

function create(product) {

    const newCart = [];

    if(cart() != '') {
        newCart.push(cart())
    }
    newCart.push(product)

    console.log(newCart);

    fs.writeFileSync('./data/cart.json', (newCart))

}
    module.exports = create;