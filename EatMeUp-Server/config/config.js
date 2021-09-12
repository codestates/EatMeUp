require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "1324",
    database: "tutorial",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
  },
};
