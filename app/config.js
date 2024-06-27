const environments = {};

environments.staging = {
  port: 3000,
  securePort: 3001,
  name: "staging"
};

environments.production = {
  port: process.env.HTTP_PORT || 5000,
  securePort: process.env.PORT || 5001,
  name: "production"
};

const environmentToExport =
  typeof process.env.NODE_ENV === "string" &&
  process.env.NODE_ENV.toLocaleLowerCase() === "production"
    ? environments.production
    : environments.staging;

module.exports = environmentToExport;
