const server = require('./server.js');

const port = 3000 || process.env.PORTl;

server.listen(port, () => {
	console.log(`Server is listening on port: ${port}`);
});
