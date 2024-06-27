const handlers = require("./handlers");

// define application routes
const routes = {
  "/": handlers.home,
  "/ping": handlers.ping,
  "/hello": handlers.hello
};

module.exports = routes;
