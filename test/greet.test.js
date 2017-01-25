var assert = require('assert');
var cowsay = require('cowsay');
var run = require('./run.js');

describe('greeting app', function() {
    it('greets by name', function() {
        var output = run(['cli.js', '--name:marty', '--plain']);
        assert.equal(output, 'Greetings, marty!\n');
    });

    it('uses "stranger" as a default when no name provided', function() {
        var output = run(['cli.js', '--plain']);
        assert.equal(output, 'Greetings, Stranger!\n');
    });

    it('greets user with cow and name', function() {
        var output = run(['cli.js', '--name:marty']);
        var response = cowsay.say({
            text: 'Greetings, marty!',
            e: 'oO',
            T: 'U'
        });
        assert.equal(output, response + '\n');
    });

    it('greets a user with no name and a cow', function() {
        var output = run(['cli.js']);
        var response = cowsay.say({
            text: 'Greetings, Stranger!',
            e: 'oO',
            T: 'U'
        });
        assert.equal(output, response + '\n');
    });

    it('uses user provided greeting', function() {
        var output = run(['cli.js', '--name:Marty', '--greeting:hola', '--plain']);
        assert.equal(output, 'hola, Marty!\n');
    });

    it('uses a default greeting when none is provided', function() {
        var output = run(['cli.js', '--plain', '--name:Marty']);
        assert.equal(output, 'Greetings, Marty!\n');
    });
});