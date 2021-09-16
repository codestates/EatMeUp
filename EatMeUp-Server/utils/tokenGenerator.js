const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

const genAccessToken = (userData) =>
  jwt.sign(userData, config.accessSecret, {
    expiresIn: "30m",
  });

const genRefreshToken = (userData) =>
  jwt.sign(userData, config.refreshSecret, {
    expiresIn: "1h",
  });

module.exports = { genAccessToken, genRefreshToken };
