const handlers = require("./handlers");

// define application routes
const routes = {
  "/": handlers.home
};

module.exports = routes;
