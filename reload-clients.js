var socket = require('socket.io-client')('http://localhost:8000');

socket.emit('reload-request','long-secret-key');

socket.on('reload-notification-sent',function () {
	console.log('reload notification sent');
	process.exit();
});