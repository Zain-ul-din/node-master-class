const http = require("http");
const https = require("https");
const fs = require("fs");

const unifiedServer = require("./server");
const config = require("./config");

const httpsServerOptions = {
  key: fs.readFileSync("./app/https/key.pem"),
  cert: fs.readFileSync("./app/https/cert.pem")
};

const httpServer = http.createServer(unifiedServer);
const httpsServer = https.createServer(httpsServerOptions, unifiedServer);

httpServer.listen(config.port, "localhost", () => {
  console.log(
    `http Server is running on post ${config.port}. Environment is ${config.name}`
  );
});

httpsServer.listen(config.securePort, "localhost", () => {
  console.log(
    `https Server is running on post ${config.securePort}. Environment is ${config.name}`
  );
});
