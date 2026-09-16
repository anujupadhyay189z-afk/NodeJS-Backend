// PS C:\Users\anuju\OneDrive\Desktop\NodeJS_Backend> node "c:\Users\anuju\
// OneDrive\Desktop\NodeJS_Backend\httpServer.js" Server running on port 3000


const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const data = {
    id: 1,
    name: "laptop",
  };

  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
// http://localhost:PORT
// this is structure of link 
// ab app port no me kuch bhi dal sakte hai`