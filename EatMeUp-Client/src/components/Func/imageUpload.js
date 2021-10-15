import axios from 'axios'

export const uploadImage = async (files) => {
  const file = files[0];

  let imageUrl = null;

  if (!file) {
    imageUrl = null;
  } else {
    const data = await axios.get("https://api.eatmeup.me/image/s3url", {
      withCredentials: true,
    });

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

    imageUrl = img.url.split("?")[0];
  }
  return imageUrl;
};