const fs = require('fs');

// write to a file in the same director - no prior file creation
// fs.writeFileSync('hello.txt', 'Hello from node.js');

// write to a file in the same directory using ${__dirname}
// fs.writeFileSync(
// 	`${__dirname}/hello.txt`,
// 	'This is the text that needs to be written'
// );

// write to a file in the data folder that lives at the same level as the .js file
// fs.writeFileSync(`${__dirname}/data/hello.txt`, `Hello from ${__dirname}`);

// in the data folder, with the .js in a scripts folder, write to a file in the data folder
fs.writeFileSync(
	`${__dirname}/../data/hello.txt`,
	`Hello I'm in ${__filename}`
);
