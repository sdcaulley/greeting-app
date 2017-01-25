var cowsay = require('cowsay');
var name = 'Stranger';
var greeting = 'Greetings';
var plain = false;

function greetUser(data) {
    for (var i = 0; i < data.length; i++) {
        if (process.argv[i].includes('--n')) {
            name = data[i].split(':');
            name = name[1];
        }
        if (data[i].includes('--p')) {
            plain = true;
        }
        if (data[i].includes('--g')) {
            greeting = process.argv[i].split(':');
            greeting = greeting[1];
        }
    }
    if (plain) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(cowsay.say({
            text: `${greeting}, ${name}!`,
            e: 'oO',
            T: 'U'
        }));
    }
}


module.exports = greetUser;