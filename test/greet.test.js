const assert = require('assert');
const cowsay = require('cowsay');
const greet = require('../lib/greet');

describe('greeting app', function() {

    it('greets by name', function() {
        const data = ['--name:marty', '--plain'];
        console.log('data: ', data);
        const output = greet(data);
        assert.equal(output, 'Greetings, marty!');
    });

    it('uses "stranger" as a default when no name provided', function() {
        const data = ['--plain '];
        const output = greet(data);
        assert.equal(output, 'Greetings, Stranger!');
    });

    it('greets user with cow and name', function() {
        const data = ['--name:marty'];
        const output = greet(data);
        const response = cowsay.say({
            text: 'Greetings, marty!',
            e: 'oO',
            T: 'U'
        });
        assert.equal(output + '\n', response + '\n');
    });

    it('greets a user with no name and a cow', function() {
        const data = [];
        const output = greet(data);
        const response = cowsay.say({
            text: 'Greetings, Stranger!',
            e: 'oO',
            T: 'U'
        });
        assert.equal(output + '\n', response + '\n');
    });

    it('uses user provided greeting', function() {
        const data = ['--name:Marty', '--greeting:hola', '--plain'];
        const output = greet(data);
        assert.equal(output, 'hola, Marty!');
    });

    it('uses a default greeting when none is provided', function() {
        const data = ['--plain', '--name:Marty'];
        const output = greet(data);
        assert.equal(output, 'Greetings, Marty!');
    });
});