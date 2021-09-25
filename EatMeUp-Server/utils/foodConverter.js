const toDB = (data) => {};

const toClient = (data) => {
  console.log(data);

  const foodData = [
    { type: 0, items: [] },
    { type: 1, items: [] },
    { type: 2, items: [] },
  ];

  data.forEach((item) => {
    foodData[item.frez_type].items.push(item);
  });

  console.log(foodData);
  return foodData;
};

module.exports = { toDB, toClient };
