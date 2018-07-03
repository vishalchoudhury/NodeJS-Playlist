/**
 * http://usejsdoc.org/
 * Creating a function in node js
 */

function sayHi(name) {
	console.log("say hi "+name);
}

sayHi('vishal');

const sayBye = function(name) {
	console.log("say bye "+name);
}

function callFunct(fun,name) {
	fun(name);
}

//sayBye('vishal');

callFunct(sayBye,'vishal');