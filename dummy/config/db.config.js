const envConfig = require("./env.config");
module.exports = {
  // HOST: envConfig.databaseHost,
  // USER: envConfig.databaseUser,
  // PASSWORD: envConfig.databasePass,
  // DB: envConfig.databaseName,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};