"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Recipe, {
        foreignKey: "post_user_id",
      });
      models.User.hasMany(models.Food, {
        foreignKey: "own_user_id",
        onDelete: "CASCADE",
      });
      models.User.hasMany(models.Mealplanner, {
        foreignKey: "own_user_id",
        onDelete: "CASCADE",
      });
      models.User.belongsToMany(models.Recipe, {
        through: "User_Like_Recipe",
        as: "likeRecipe",
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      refresh_token: DataTypes.STRING,
      guest: { type: DataTypes.BOOLEAN, defaultValue: false },
      admin: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
