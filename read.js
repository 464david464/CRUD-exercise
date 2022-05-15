const fs = require('fs');

function read() {
    const cart = fs.readFileSync('./data/cart.json', 'utf-8');

    if(cart === '') {
        fs.writeFileSync('./data/cart.json', '[]')
    }

    return cart;
}

module.exports = read;