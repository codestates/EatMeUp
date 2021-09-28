const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

const genAccessToken = (userData) =>
  jwt.sign(userData, config.accessSecret, {
    expiresIn: "1d",
  });

const genRefreshToken = (userData) =>
  jwt.sign(userData, config.refreshSecret, {
    expiresIn: "7d",
  });

const genGuestAccessToken = (userData) =>
  jwt.sign(userData, config.accessSecret, {
    expiresIn: "30m",
  });

const genGuestRefreshToken = (userData) =>
  jwt.sign(userData, config.refreshSecret, {
    expiresIn: "30m",
  });

module.exports = {
  genAccessToken,
  genRefreshToken,
  genGuestAccessToken,
  genGuestRefreshToken,
};
