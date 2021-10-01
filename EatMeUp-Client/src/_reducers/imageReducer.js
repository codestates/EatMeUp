import { IMAGEUPLOAD_SUCCESS, IMAGEUPLOAD_FAIL, IMAGE_RESET} from "../_types/imageTypes";

export const imageReducer = (state = { image: {} }, action) => {
  switch (action.type) {
    case IMAGEUPLOAD_SUCCESS:
      return {
        success: true,
        image: action.payload
      };
    case IMAGE_RESET:
      return {
        success: false,
        image: null
      }
    case IMAGEUPLOAD_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
