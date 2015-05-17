module.exports = function (server) {
	var io = require('socket.io').listen(server);
	io.on('connection',function (socket) {

		socket.on('reload-request',function (key) {
			console.log('reload request received');
			if (key == 'long-secret-key') {
				io.emit('reload');
				socket.emit('reload-notification-sent');
			};
		});

	});
};