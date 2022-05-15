const fs = require('fs');
const read = require('./read');

function create(product) {
<<<<<<< HEAD
    cart() // if cart === '', creating '[]'

    const newCart = JSON.parse(cart());
    
    newCart.push(product)
    fs.writeFileSync('./data/cart.json', JSON.stringify(newCart))
    
console.log(newCart);
}

module.exports = create;
=======

    const cart = JSON.parse(read())

    if(cart[0] == undefined) {
        cart.push(product)
    }

    cart.push(cart[0], product)
    
    console.log(cart);

    fs.writeFileSync('./data/cart.json', cart)

}
    module.exports = create;
>>>>>>> e34b23e9edd40d39163d05ea92d01c778b5b2ba0
