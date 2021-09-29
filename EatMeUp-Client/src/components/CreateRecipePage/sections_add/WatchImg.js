import { useForm, useWatch } from "react-hook-form";

export default function WatchImg () {
  const { control } = useForm();

  const recipeImg_0 = useWatch({
    control,
    name: "image-0",
    defaultValue: null,
  });

  const recipeImg_1 = useWatch({
    control,
    name: "image-1",
    defaultValue: null,
  });

  const recipeImg_2 = useWatch({
    control,
    name: `image-2`,
    defaultValue: null,
  });

  const recipeImg_3 = useWatch({
    control,
    name: `image-3`,
    defaultValue: null,
  });

  const recipeImg_4 = useWatch({
    control,
    name: `image-4`,
    defaultValue: null,
  });

  const recipeImg_5 = useWatch({
    control,
    name: `image-5`,
    defaultValue: null,
  });
  const recipeImg_6 = useWatch({
    control,
    name: `image-6`,
    defaultValue: null,
  });
  const recipeImg_7 = useWatch({
    control,
    name: `image-7`,
    defaultValue: null,
  });
  const recipeImg_8 = useWatch({
    control,
    name: `image-8`,
    defaultValue: null,
  });
  const recipeImg_9 = useWatch({
    control,
    name: `image-9`,
    defaultValue: null,
  });

  const recipeImg_10 = useWatch({
    control,
    name: `image-10`,
    defaultValue: null,
  });
  
  return {
    recipeImg_0,
    recipeImg_1,
    recipeImg_2,
    recipeImg_3,
    recipeImg_4,
    recipeImg_5,
    recipeImg_6,
    recipeImg_7,
    recipeImg_8,
    recipeImg_9,
    recipeImg_10,
  }

};



