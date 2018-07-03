/**
 * http://usejsdoc.org/
 * Using modules
 */

const counter = function(arr) {
	return 'There are ' + arr.length + ' elements in the array';
};

//console.log(counter(['abcsc','cdcjas','hwdiw']));

const adder = function(a,b) {
	return (a+b);
}

//console.log(adder(5,6));

module.exports.counter = counter;

module.exports.adder = adder;

