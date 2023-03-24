const app = require('./app');

const socketIo = require('socket.io');
const http = require('http');

const { parser, puertocom } = require('./services/serial.js');
let lecturas = '';

app.listen(3000, () =>
	console.log(`Dolphin app listening on port ${puertocom}!`)
);

parser.on(
	'data', //console.log,
	function (data) {
		console.log(data.toString());
	}
);

parser.on('err', function (err) {
	console.log(err.message);
});

app.get('/', (req, res) => {
	res.send('Hello skdksksmdl');
});
