"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "guest", {
      defaultValue: false,
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn("Users", "admin", {
      defaultValue: false,
      type: Sequelize.BOOLEAN,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "guest");
    await queryInterface.removeColumn("Users", "admin");
  },
};
