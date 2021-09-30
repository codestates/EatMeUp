"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mealplanner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Mealplanner.belongsTo(models.User, {
        foreignKey: "own_user_id",
        as: "user",
      });
      models.Mealplanner.belongsToMany(models.Recipe, {
        through: "Breakfast",
        as: "mealplanBreakfast",
        foreignKey: "mealplanner_id",
      });
      models.Mealplanner.belongsToMany(models.Recipe, {
        through: "Lunch",
        as: "mealplanLunch",
        foreignKey: "mealplanner_id",
      });
      models.Mealplanner.belongsToMany(models.Recipe, {
        through: "Dinner",
        as: "mealplanDinner",
        foreignKey: "mealplanner_id",
      });
    }
  }
  Mealplanner.init(
    {
      date: DataTypes.STRING,
      own_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Mealplanner",
    },
  );
  return Mealplanner;
};
