/**
 * http://usejsdoc.org/
 * Reading and writing file asyc
 */

const fs = require('fs');

fs.readFile('readMe.txt','utf8',function(err,data) {
	console.log(data);
	fs.writeFile('writeMe.txt',data);
});