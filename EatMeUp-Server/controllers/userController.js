const { User } = require("../models");

const getInfo = async (req, res) => {
  const { id } = req.body;
  const findInfo = await User.findOne({ where: id });
  if (!findInfo) {
    return res
      .status(400)
      .json({ success: false, message: "failed to user info" });
  }
  return res.status(200).json({ findInfo, success: true });
};

const putInfo = async (req, res) => {
  const { id, username, avatar } = req.body;
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
  const { id } = req.body;
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
