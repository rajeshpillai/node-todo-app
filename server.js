var http = require ("http");
var fs = require("fs");

var port = 3000;

const server = http.createServer(function (req, res) {
    if (req.url == "/")  {
        fs.readFile("public/index.html", function (err, page) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(page);
        })
    }
});

server.listen(port, function (err) {
    if (err) {
        console.log("Something bad happened", err);
    }
    console.log(`Server running on port ${port}`);
})
