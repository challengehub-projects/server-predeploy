const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.writeHead(200, { "content-type": 'text/html'});
        res.end('<h1>Welcome to http servers</h1>');;
    }

    if(req.url === '/api/services') {
        res.writeHead(200, { "content-type": 'text/html'});
        res.end(JSON.stringify([{id: 1, name: "Great", price: 2000}]));
    }
});

server.listen(4000, () => console.log("Server is runnig at port 4000"))