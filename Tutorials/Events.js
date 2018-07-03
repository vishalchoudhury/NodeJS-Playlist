/**
 * http://usejsdoc.org/
 */


const events = require('events');

const myEvent = new events.EventEmitter();

myEvent.on('someEvent',function(msg) {
	console.log(msg);
});

myEvent.emit('someEvent','Event was emitted');
