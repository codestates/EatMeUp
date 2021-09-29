import { IMAGEUPLOAD_SUCCESS, IMAGEUPLOAD_FAIL } from "../_types/imageTypes";
import axios from "axios";

export const imageUpload = (file) => async (dispatch) => {
  try {
    const data = await axios.get(`${process.env.REACT_APP_API}/image/s3url`, {
      withCredentials: true,
    });

    //url을 사용해서 S3 버킷에 업로드
    //axios
    const img = await fetch(
      data.data.s3url,
      {
        method: "PUT",
        headers: {
          "Content-Type": "image/jpeg",
        },
        body: file,
      },
      {
        withCredentials: true,
      },
    );

    dispatch({
      type: IMAGEUPLOAD_SUCCESS,
      payload: img.url.split("?")[0],
    });
  } catch (error) {
    dispatch({
      type: IMAGEUPLOAD_FAIL,
      payload: error,
    });
  }
};
