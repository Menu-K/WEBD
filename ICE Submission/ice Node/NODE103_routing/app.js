const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
	// get the url from the req
	// get the method from the req
	// if the url '/'
	// write the html for the index page to the res object
	// else if the url '/message' and the method is 'POST'
	// write the input to a file, and return the html from the message.html by writing it to the res object
	// finally, be sure to send the res object
});

server.listen(PORT, '127.0.0.1');
