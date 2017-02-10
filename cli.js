var greetUser = require('./lib/greet.js');

const data = process.argv.slice(2);

greetUser(data);

module.exports = { greetUser };