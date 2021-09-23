"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert(
    //   "Users",
    //   [
    //     {
    //       username: "test1",
    //       email: "test1@test.test",
    //       password: "1234",
    //       avatar: null,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       username: "test2",
    //       email: "test2@test.test",
    //       password: "1234",
    //       avatar: null,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       username: "test3",
    //       email: "test3@test.test",
    //       password: "1234",
    //       avatar: null,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {},
    // );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
