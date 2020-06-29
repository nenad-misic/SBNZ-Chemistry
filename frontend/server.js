var http = require('http');

var nStatic = require('node-static');

var port = process.env.PORT || 1337;

var fileServer = new nStatic.Server('./public');

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(port);
