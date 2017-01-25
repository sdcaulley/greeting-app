var cowsay = require('cowsay');

var name = 'stranger';

if (process.argv[2] !== '--plain') {
    name = process.argv[2] || 'stranger';
}

if (process.argv[2] === '--plain' || process.argv[3] === '--plain') {
    console.log(`Hello, ${name}!`)
} else {
    console.log(cowsay.say({
        text: 'Hello, ' + name,
        e: 'oO',
        T: 'U'
    }));
}