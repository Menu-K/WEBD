const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
	// PART 1
	// console.log(req);
	// console.log(`URL: ${req.url} METHOD: ${req.method}`);
	// console.log(JSON.stringify(req.headers));
	// process.exit();

	// PART 2
	res.setHeader('Content-Type', 'text/html');
	res.write(`<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>NODE 102 - Server!</title>
                    </head>
                    <body>
                        <h1>This is a unique header to see when the server spins up!</h1>
                    </body>
                </html>`);
	res.end();
});

server.listen(PORT, '127.0.0.1');
