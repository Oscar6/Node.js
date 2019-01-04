const http = require('http');

var dt = new Date();

var server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write("Current time and date" + dt.toDateString());

    res.end();

})

server.listen(3000)

console.log("listening to server on port 3000")