import { 
  ALL_FOODS_SUCCESS,
  NEW_FOOD_SUCCESS,
  EDIT_FOOD_SUCCESS,
  SAVE_FOOD_SUCCESS,
  DELETE_FOOD_SUCCESS

} from '../_types/fridgeTypes'

import { foodData } from '../components/dummydata'

const FOODS = foodData.map((type, typeIdx) => {
  const itemarray = type.items.map((food) => {
     const splited = food.life.split("-");
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
       id: food.id,
       food_name: food.food_name,
       food_image: food.food_image,
       frez_type: food.frez_type,
       life: elapsedDay,
       created_at: food.created_at,
       update_at: food.update_at,
     };
   });

   return {
     type: typeIdx,
     items: itemarray,
   };
 });

export const allFoodsReducer = (state = { foods: FOODS}, action) => {
  switch(action.type) {

    case ALL_FOODS_SUCCESS:
      return {
        loading: false,
        foods: action.payload
      }
    case NEW_FOOD_SUCCESS:
      return {
        loading: false,
        foods: action.payload
      }
    case SAVE_FOOD_SUCCESS: 
      return {
        loading: false,
        foods: action.payload
      }
    case EDIT_FOOD_SUCCESS:
      return {
        loading: false,
        foods: action.payload
      }
    default:
      return state;
  }
}
