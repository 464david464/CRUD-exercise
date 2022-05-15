const fs = require('fs');

function read() {
    const cart = fs.readFileSync('./data/cart.json', 'utf-8');
<<<<<<< HEAD

    if(cart === '') {
        fs.writeFileSync('./data/cart.json', '[]')
    }

=======
    
>>>>>>> e34b23e9edd40d39163d05ea92d01c778b5b2ba0
    return cart;
}

module.exports = read;