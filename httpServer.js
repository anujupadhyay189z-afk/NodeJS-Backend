const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const data = {
    id: 1,
    name: "laptop",
  };

  res.end(JSON.stringify(data));
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
// http://localhost:PORT
// this is structure of link 
// ab app port no me kuch bhi dal sakte hai`