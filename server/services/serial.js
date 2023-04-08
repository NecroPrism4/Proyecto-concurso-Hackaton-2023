const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const port = new SerialPort({ path: 'COM4', baudRate: 9600 });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// parser.on('open', function () {
// 	console.log('connection is opened');
// });

// parser.on('data', console.log, (data) => {
// 	lecturas += data;
// });

let puertocom = port.path;

module.exports = { parser, puertocom };
