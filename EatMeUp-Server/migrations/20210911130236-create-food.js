"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Foods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      food_name: {
        type: Sequelize.STRING,
      },
      food_image: {
        type: Sequelize.STRING,
      },
      frez_type: {
        type: Sequelize.STRING,
      },
      life: {
        type: Sequelize.STRING,
      },
      own_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    // await queryInterface.dropTable("Foods");
  },
};
