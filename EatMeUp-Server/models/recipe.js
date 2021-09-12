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
        targetKey: "id",
      });
    }
  }
  Recipe.init(
    {
      recipe_title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Recipe",
    },
  );
  return Recipe;
};
