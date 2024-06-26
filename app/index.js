const http = require("http");

const serverConfig = {
  port: 3000,
};

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});

server.listen(serverConfig.port, "localhost", () => {
  console.log(`Server is running on post ${serverConfig.port}`);
});
