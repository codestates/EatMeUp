export const foodLife = (foodlife) => {
  const setDate = new Date(`${foodlife}`);
  const setDateYear = setDate.getFullYear();
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDay = setDate.getDate();

  const now = new Date();

  const distance = setDate.getTime() - now.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));

  return day;
};


export const sliceHandler = (date) => {
  const createAt = date.slice(0, 10);
  const Y = createAt.slice(0, 4);
  const M = createAt.slice(5, 7);
  const D = createAt.slice(8, 10);
  return `${Y}.${M}.${D}`;
};

export const calculatorLife = (life) => {
  if (Number(foodLife(life)) < 0) {
    return Math.abs(foodLife(life));
  }

  if (Number(foodLife(life)) === 0) {
    return "day";
  }

  return foodLife(life);
};


export const convertStr = (idx) => {
  if (idx === 0) {
    return "실온";
  } else if (idx === 1) {
    return "냉장";
  } else {
    return "냉동";
  }
};