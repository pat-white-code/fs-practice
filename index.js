const fs = require('fs');

const readTxt = fs.readFileSync('readThis.txt', 'utf8');

fs.writeFileSync('writeThis.txt', readTxt);

// fs.writeFileSync('writeThis.txt', 'Now some more text!')

const newTxt = fs.readFileSync('writeThis.txt', 'utf8');

console.log('A new file was made - writeThis.txt: ', newTxt);
