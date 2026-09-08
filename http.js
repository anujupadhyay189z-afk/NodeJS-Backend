const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.write("Hello World");
        res.end();
    }
});

server.listen(8000, () => {
    console.log("Server running on port 8000");
});

