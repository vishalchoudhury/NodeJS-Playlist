/**
 * http://usejsdoc.org/
 * Reading a file async
 */

const fs = require('fs');

const readMe = fs.readFileSync('readme.txt', 'UTF-8');

//console.log(readMe);

fs.writeFileSync('writeme.txt',readMe);
