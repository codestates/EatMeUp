const toDB = (data) => {
  //음식 저장
  const reqFoods = data;
  //변경한 음식 저장할 빈배열
  const chgFoods = [];
  //변경한 음식만 타입바꿔서 빈배열에 저장
  reqFoods.forEach((foodTypes) => {
    let type = foodTypes.type;
    foodTypes.items.forEach((food) => {
      if (food.frez_type !== type) {
        food.frez_type = type;
        chgFoods.push(food);
      }
    });
  });

  return chgFoods;
};

const toClient = (data) => {
  const foodData = [
    { type: "0", items: [] },
    { type: "1", items: [] },
    { type: "2", items: [] },
  ];

  data.forEach((item) => {
    foodData[item.frez_type].items.push(item);
  });

  return foodData;
};

module.exports = { toDB, toClient };
