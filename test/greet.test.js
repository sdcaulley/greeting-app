var assert = require('assert');
var cowsay = require('cowsay');
var run = require('./run.js');

describe('greeting app', function() {
    it('greets by name', function() {
        var output = run(['./lib/greet.js', 'marty', '--plain']);
        assert.equal(output, 'Hello, marty!\n');
    });

    it('uses "stranger" as a default when no name provided', function() {
        var output = run(['./lib/greet.js', '--plain']);
        assert.equal(output, 'Hello, stranger!\n');
    });

    it('greets user with cow and name', function() {
        var output = run(['./lib/greet.js', 'marty']);
        assert.equal(output, cowsay.say({
            text: 'Hello, marty!',
            e: 'oO',
            T: 'U'
        }));
    });

    it('greets a user with no name and a cow', function() {
        var output = run(['./lib/greet.js']);
        var response = cowsay.say({
            text: 'Hello, stranger!',
            e: 'oO',
            T: 'U'
        });
        assert.equal(output, response);
    });
});