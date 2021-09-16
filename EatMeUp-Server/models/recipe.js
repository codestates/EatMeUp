"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Recipe.belongsTo(models.User, {
        foreignKey: "post_user_id",
        as: "user",
      });
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      main_image: DataTypes.STRING,
      foods: DataTypes.JSONB,
      steps: DataTypes.JSONB,
    },
    {
      sequelize,
      modelName: "Recipe",
    },
  );
  return Recipe;
};
