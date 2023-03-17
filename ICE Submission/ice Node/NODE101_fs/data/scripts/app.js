const fs = require('fs');

// Write to a file in the same directory - no prior file creation
// fs.writeFileSync('hello.txt', 'Hello from node.js');

// write to a file in the same directory using ${_dirname}
// fs.writeFileSync(`${__dirname}/hello.txt`, 'This is the text that needs to be written');

// Write to a file in the data 
// fs.writeFileSync(`${__dirname}/data/hello.txt`,`Hello from ${__dirname}`);

// in the data folder, with the .js in a scripts folder, write to a file in the data folder
fs.writeFileSync(`${__dirname}/../data/hello.js`, `Hello I'm in ${__filename}`);