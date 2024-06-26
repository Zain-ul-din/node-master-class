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

module.exports = {
  trimUrl,
};
