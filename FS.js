const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);

  res.write("Hello, Welcome to Node.js!\n");
  res.end("Request received");
});

server.listen(3001);


