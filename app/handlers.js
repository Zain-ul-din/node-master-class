// Request handlers
const handlers = {};

/**
 * Home Handler
 * @param {any} reqMetaData
 * @param {(statusCode: number, data: any)=> void} callback
 */
handlers.home = function (reqMetaData, callback) {
  callback(200, { message: "hello world!" });
};

/**
 * Not found Handler
 * @param {any} reqMetaData
 * @param {(statusCode: number, data: any)=> void} callback
 */
handlers.notFound = function (reqMetaData, callback) {
  callback(404);
};

module.exports = handlers;
