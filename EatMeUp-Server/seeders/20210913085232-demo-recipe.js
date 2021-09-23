"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert(
    //   "Recipes",
    //   [
    //     {
    //       id: 1,
    //       title: "test1",
    //       description: "냠냠",
    //       main_image: null,
    //       foods: JSON.stringify([
    //         { item: "재료1", cnt: "1개" },
    //         { item: "재료2", cnt: "2개" },
    //         { item: "재료3", cnt: "3개" },
    //       ]),
    //       steps: JSON.stringify([
    //         { image: "/그림1", text: "냠냠" },
    //         { image: "/그림2", text: "냠냠" },
    //         { image: "/그림3", text: "냠냠" },
    //       ]),
    //       post_user_id: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       id: 2,
    //       title: "test2",
    //       description: "냠냠",
    //       main_image: null,
    //       foods: JSON.stringify([
    //         { item: "재료1", cnt: "1개" },
    //         { item: "재료2", cnt: "2개" },
    //         { item: "재료3", cnt: "3개" },
    //       ]),
    //       steps: JSON.stringify([
    //         { image: "/그림1", text: "냠냠" },
    //         { image: "/그림2", text: "냠냠" },
    //         { image: "/그림3", text: "냠냠" },
    //       ]),
    //       post_user_id: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       id: 3,
    //       title: "test3",
    //       description: "냠냠",
    //       main_image: null,
    //       foods: JSON.stringify([
    //         { item: "재료1", cnt: "1개" },
    //         { item: "재료2", cnt: "2개" },
    //         { item: "재료3", cnt: "3개" },
    //       ]),
    //       steps: JSON.stringify([
    //         { image: "/그림1", text: "냠냠" },
    //         { image: "/그림2", text: "냠냠" },
    //         { image: "/그림3", text: "냠냠" },
    //       ]),
    //       post_user_id: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       id: 4,
    //       title: "test4",
    //       description: "냠냠",
    //       main_image: null,
    //       foods: JSON.stringify([
    //         { item: "재료1", cnt: "1개" },
    //         { item: "재료2", cnt: "2개" },
    //         { item: "재료3", cnt: "3개" },
    //       ]),
    //       steps: JSON.stringify([
    //         { image: "/그림1", text: "냠냠" },
    //         { image: "/그림2", text: "냠냠" },
    //         { image: "/그림3", text: "냠냠" },
    //       ]),
    //       post_user_id: 2,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       id: 5,
    //       title: "test5",
    //       description: "냠냠",
    //       main_image: null,
    //       foods: JSON.stringify([
    //         { item: "재료1", cnt: "1개" },
    //         { item: "재료2", cnt: "2개" },
    //         { item: "재료3", cnt: "3개" },
    //       ]),
    //       steps: JSON.stringify([
    //         { image: "/그림1", text: "냠냠" },
    //         { image: "/그림2", text: "냠냠" },
    //         { image: "/그림3", text: "냠냠" },
    //       ]),
    //       post_user_id: 2,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       id: 6,
    //       title: "test6",
    //       description: "냠냠",
    //       main_image: null,
    //       foods: JSON.stringify([
    //         { item: "재료1", cnt: "1개" },
    //         { item: "재료2", cnt: "2개" },
    //         { item: "재료3", cnt: "3개" },
    //       ]),
    //       steps: JSON.stringify([
    //         { image: "/그림1", text: "냠냠" },
    //         { image: "/그림2", text: "냠냠" },
    //         { image: "/그림3", text: "냠냠" },
    //       ]),
    //       post_user_id: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {},
    // );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete("Recipes", null, {});
  },
};
