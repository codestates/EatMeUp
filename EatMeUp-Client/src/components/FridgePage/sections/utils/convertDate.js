export const foodLife = (foodlife) => {
  
     const splited = foodlife.split("-");
     const getDate = new Date();
     const today = new Date(
       getDate.getFullYear(),
       getDate.getMonth(),
       getDate.getDay(),
     );
     const foodLife = new Date(
       Number(splited[0]),
       Number(splited[1]),
       Number(splited[2]),
     );

     const elapsedMSec = foodLife.getTime() - today.getTime(); // 172800000
     const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24; // 2

     return {
       elapsedDay,
     };
};
