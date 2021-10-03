"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Food.belongsTo(models.User, {
        foreignKey: "own_user_id",
        as: "user",
        onDelete: "CASCADE",
      });
    }
  }
  Food.init(
    {
      food_name: DataTypes.STRING,
      food_image: DataTypes.STRING,
      frez_type: DataTypes.STRING,
      life: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Food",
    },
  );
  return Food;
};
