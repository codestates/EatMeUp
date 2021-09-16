require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "pgadmin",
    database: "eatmeup",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.EATMEUP_DATABASE_USERNAME,
    password: process.env.EATMEUP_DATABASE_PASSWORD,
    database: process.env.EATMEUP_DATABASE_DATABASE,
    port: process.env.EATMEUP_DATABASE_PORT,
    host: process.env.EATMEUP_DATABASE_HOST,
    dialect: process.env.EATMEUP_DATABASE_DIALECT,
  },
};
