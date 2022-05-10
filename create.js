const fs = require('fs');
const cart = require('./read');

function create(product) {
    const newCart = [cart];
    
    newCart.push(product)
}

module.exports = cart;