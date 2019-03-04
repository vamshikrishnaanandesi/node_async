const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codeTest', {
	autoReconnect: true,
	reconnectTries: 60,
	reconnectInterval: 10000
});

const app = express();
app.listen(3000);

app.use(require('body-parser').json());
app.use('/account/create', require('./routers/account/create.router'));
app.use('/notifications/create', require('./routers/notifications/notifications.router'))
app.use('/notifications/get', require('./routers/notifications/notifications.router'))
app.use('/notifications/delete', require('./routers/notifications/notifications.router'))
console.log('app running on port 3000...');

module.exports = app;
