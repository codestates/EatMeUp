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
