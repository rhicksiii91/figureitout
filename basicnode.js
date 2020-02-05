var http = require('http');
var datentime = require('./datentime');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(datentime.myDateTime() +'<br/>');
  res.write(req.url);
  res.end();
}).listen(8081);
