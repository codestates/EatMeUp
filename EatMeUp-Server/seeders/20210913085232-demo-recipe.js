"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Recipes",
      [
        {
          id: 1,
          title: "test1",
          description: "냠냠",
          main_image: null,
          foods: [
            ["재료1", "4"],
            ["재료2", "10"],
            ["재료3", "1"],
          ],
          steps: [
            [null, "냠냠"],
            [null, "냠냠"],
          ],
          post_user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Recipes", null, {});
  },
};
