const http = require("http");
const url = require("url");
const path = require("path");

const serverConfig = {
  port: 3000,
};

/**
 * trim url path also removes double slashes from url
 *
 * Example:
 * ```md
 * /foo//bar// => /foo/bar
 * /hello/ => /hello
 * / => /
 * ```
 * @param {string} url
 * @returns string
 */
const trimUrl = (url) => {
  return (
    "/" + // since first segment always gonna be empty string
    url
      .split("/")
      .filter((segment) => segment.length > 0)
      .join("/")
  );
};

const server = http.createServer((req, res) => {
  /**
   * Extract Request path from the request object
   */
  const requestedUrl = url.parse(req.url);
  const { pathname } = requestedUrl;
  const trimmedPath = trimUrl(pathname);

  console.log("raw url: ", req.url);
  console.log("path name: ", pathname);
  console.log("trimmed path: ", trimmedPath);

  /**
   * Extract http method from the request object
   */
  const method = req.method;

  console.log("request method: ", method);

  // end request
  res.write("hello world");
  res.end();
});

server.listen(serverConfig.port, "localhost", () => {
  console.log(`Server is running on post ${serverConfig.port}`);
});
