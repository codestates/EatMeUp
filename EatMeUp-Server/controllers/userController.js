const { User } = require("../models");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const jwt = require("jsonwebtoken");

const getInfo = async (req, res) => {
  const { id } = jwt.verify(req.cookies.accessToken, config.accessSecret);
  const findInfo = await User.findOne({ where: id });
  if (!findInfo) {
    return res
      .status(400)
      .json({ success: false, message: "failed to user info" });
  }
  return res.status(200).json({ findInfo, success: true });
};

const putInfo = async (req, res) => {
  const { id } = jwt.verify(req.cookies.accessToken, config.accessSecret);
  const { username, avatar } = req.body;
  const updateInfo = await User.update(
    {
      username,
      avatar,
    },
    { where: { id } },
  );
  if (!updateInfo) {
    return res
      .status(400)
      .json({ success: false, message: "failed to user edit" });
  }
  return res.status(200).json({ success: true });
};

const deleteInfo = async (req, res) => {
  const { id } = jwt.verify(req.cookies.accessToken, config.accessSecret);
  const destroyInfo = await User.destroy({ where: { id } });
  if (!destroyInfo) {
    return res
      .status(400)
      .json({ success: false, message: "failed to user delete" });
  }
  return res.status(200).json({ success: true });
};

module.exports = {
  getInfo,
  putInfo,
  deleteInfo,
};
