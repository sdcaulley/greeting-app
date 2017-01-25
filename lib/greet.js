var cowsay = require('cowsay');

var name = process.argv[2] || 'stranger';
console.log(cowsay.say({
    text: "Hello, " + name,
    e: "oO",
    T: "U "
}));