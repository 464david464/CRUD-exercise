const fs = require('fs');
const read = require('./read');

function create(product) {

    const cart = JSON.parse(read())

    if(cart[0] == undefined) {
        cart.push(product)
    }

    cart.push(cart[0], product)
    
    console.log(cart);

    // fs.writeFileSync('./data/cart.json', (cart))

}
    module.exports = create;