var http = require ("http");
var port = 3000;

const server = http.createServer(function (req, res) {
   
    res.end("hello world");
});

server.listen(port, function (err) {
    if (err) {
        console.log("Something bad happened", err);
    }
    console.log(`Server running on port ${port}`);
})
