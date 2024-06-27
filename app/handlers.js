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
 * Ping Handler
 * @param {any} reqMetaData
 * @param {(statusCode: number, data: any)=> void} callback
 */
handlers.ping = function (reqMetaData, callback) {
  callback(200);
};

/**
 * Hello Handler
 * @param {any} reqMetaData
 * @param {(statusCode: number, data: any)=> void} callback
 */
handlers.hello = function (reqMetaData, callback) {
  callback(200, { message: "Hello there!" });
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
