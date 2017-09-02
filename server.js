var http = require ("http");
var fs = require("fs");
var qs = require("querystring");

var ejs = require("ejs");
var port = 3000;

var todos = [];

for(let i = 0; i <= 10; i++) {
    todos.push({
        id: i,
        title: "todo " + i,
        completed: false
    })
}

console.log(todos);

const server = http.createServer(function (req, res) {
    console.log(req.url);
    switch(req.url) {
        case "/":
            ejs.renderFile("./public/index.ejs", {todos: todos}, null, function (err, str) {
                res.end(str);
            });
            break;
       
        case "/todos":
            if (req.method == "POST") {
                var postedData = "";
                req.on("data", function (chunk) {
                    console.log(chunk);
                    postedData += chunk;
                });
                req.on("end", function () {
                    var todo = qs.parse(postedData);
                    todo.completed = false;
                    todo.id = todos.length;

                    console.log(todo);

                    todos.push(todo);
                    res.writeHead(302, {"Location": "/"});
                    res.end();
                })
            }
            break;
    }
});

server.listen(port, function (err) {
    if (err) {
        console.log("Something bad happened", err);
    }
    console.log(`Server running on port ${port}`);
})
