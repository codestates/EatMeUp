import { IMAGEUPLOAD_SUCCESS, IMAGEUPLOAD_FAIL, IMAGE_RESET} from "../_types/imageTypes";

export const imageReducer = (state = { }, action) => {
  switch (action.type) {
    case IMAGEUPLOAD_SUCCESS:
      return {
        success: true,
        imageUrl: action.payload
      };
    case IMAGE_RESET:
      return {
        success: false,
        imageUrl: null
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
