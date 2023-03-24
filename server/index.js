const { parser, puertocom } = require('./services/serial.js');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

server.listen(3000, () => {
	console.log('listening on *:3000');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	console.log('a user connected');
});

parser.on(
	'data', //console.log,
	function (data) {
		console.log(data.toString());
		io.emit('arduino:data', { value: data.toString() });
	}
);

parser.on('err', function (err) {
	console.log(err.message);
});
