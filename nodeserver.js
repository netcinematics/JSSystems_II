var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8088);

console.log('Server running at http://127.0.0.1:8088/');