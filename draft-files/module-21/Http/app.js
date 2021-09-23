
const http = require("http");

http.createServer((request, response) =>{

    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.end('Hello world');

}).listen(3000);