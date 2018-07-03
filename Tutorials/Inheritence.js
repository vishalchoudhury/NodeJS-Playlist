/**
 * http://usejsdoc.org/
 * Use of inheritence
 */

const events = require('events');

const util = require('util');

const person = function(name) {
	this.name = name;
};

util.inherits(person,events.EventEmitter);

const vishal = new person('vishal');
const vivek = new person('vivek');

const people = [vishal,vivek];

people.forEach(function(person) {
	person.on('speak',function(msg) {
		console.log(person.name + ' said: ' + msg);
	});
});

vishal.emit('speak','Hey dude!');
vivek.emit('speak','I want a curry');
