import { 
  ALL_FOODS_SUCCESS,
  NEW_FOOD_SUCCESS,
  EDIT_FOOD_SUCCESS,
  SAVE_FOOD_SUCCESS,
  DELETE_FOOD_SUCCESS

} from '../_types/fridgeTypes'

import { foodData } from '../components/dummydata'

export const allFoodsReducer = (state = { foods: foodData}, action) => {
  switch(action.type) {

    case ALL_FOODS_SUCCESS:
      return {
        loading: false,
        foods: action.payload
      }

    case NEW_FOOD_SUCCESS:
      const addTofridge = foodData.map((item, id) => {
        if(item.type === 0) {
          return {
            type: id,
            items: [...item.items, action.payload]
          }
        } else {
          return item
        }
      })
      console.log(addTofridge)
      return {
        loading: false,
        foods: addTofridge
      }
      
    case SAVE_FOOD_SUCCESS: 
    console.log(action.payload)
      return {
        loading: false,
        foods: action.payload
      }
  
    default:
      return state;
  }
}