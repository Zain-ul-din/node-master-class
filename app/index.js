const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

const util = require("./util");
const handlers = require("./handlers");

const serverConfig = {
  port: 3000,
};

const server = http.createServer((req, res) => {
  /**
   * Extract Request path from the request object
   */
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  const trimmedPath = util.trimUrl(pathname);

  console.log("raw url: ", req.url);
  console.log("path name: ", pathname);
  console.log("trimmed path: ", trimmedPath);

  /**
   * Extract http method from the request object
   */
  const method = req.method;

  console.log("request method: ", method);

  /**
   * Extract Query string from url & Get Query string as an object
   */
  const { query } = parsedUrl;

  console.log("request query: ", JSON.stringify(query, null, 2));

  /**
   * Get request headers
   */
  const { headers } = req;

  console.log("request headers: ", JSON.stringify(headers, null, 2));

  /**
   * Parse Payload
   */
  const stringDecoder = new StringDecoder("utf-8");
  let buffer = "";

  console.log("--- Going to parse payload ---");

  // client sending data in stream
  req.on("data", (chunk) => {
    buffer += stringDecoder.write(chunk);
  });

  // emits on request end
  req.on("end", () => {
    buffer += stringDecoder.end();
    console.log("payload: ", buffer);

    const chosenHandler =
      typeof routes[trimmedPath] !== "undefined"
        ? routes[trimmedPath]
        : handlers.notFound;

    const requestMetaData = {
      url: trimmedPath,
      query,
      method,
      headers,
      payload: buffer,
    };

    // route the request to chosen handler
    chosenHandler(requestMetaData, function (statusCode, data) {
      statusCode = typeof statusCode === "number" ? statusCode : 200;
      data = typeof data === "object" ? data : {};

      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(JSON.stringify(data));
    });
  });
});

server.listen(serverConfig.port, "localhost", () => {
  console.log(`Server is running on post ${serverConfig.port}`);
});

// define application routes
const routes = {
  "/": handlers.home,
};
