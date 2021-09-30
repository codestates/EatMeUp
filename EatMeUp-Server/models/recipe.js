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
      models.Recipe.belongsToMany(models.User, {
        through: "User_Like_Recipe",
        as: "likeUser",
        foreignKey: "recipe_id",
      });
      models.Recipe.belongsToMany(models.Mealplanner, {
        through: "Breakfast",
        as: "breakfast",
        foreignKey: "recipe_id",
      });
      models.Recipe.belongsToMany(models.Mealplanner, {
        through: "Lunch",
        as: "lunch",
        foreignKey: "recipe_id",
      });
      models.Recipe.belongsToMany(models.Mealplanner, {
        through: "Dinner",
        as: "dinner",
        foreignKey: "recipe_id",
      });
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      cooking_time: DataTypes.STRING,
      level: DataTypes.STRING,
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
