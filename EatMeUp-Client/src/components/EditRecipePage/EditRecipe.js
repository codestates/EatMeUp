import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm, useWatch } from "react-hook-form";
import { editMyrecipe } from "../../_actions/userActions";

/* 컴포넌트 */
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import Sidebar from "../Util/Sidebar";
import Loader from "../Util/Loader";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const EditRecipePage = ({ match }) => {
  /* function */

  const dispatch = useDispatch();
  const history = useHistory();

  const { recipe, loading } = useSelector((state) => state.recipe);

  const [myrecipe, setMyrecipe] = useState("");
  const [steps, setSteps] = useState([
    {
      cookingNum: 0,
      image: null,
      recipe: "",
    },
  ]);
  const [foods, setFoods] = useState([
    {
      name: "",
      capacity: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/recipe/info/${match.params.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setMyrecipe(response.data.recipeInfo[0]);
          setSteps(response.data.recipeInfo[0].steps);
          setFoods(response.data.recipeInfo[0].foods);
        }
      });
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  /*-------- preview image --------------*/
  const recipeImg0 = useWatch({
    control,
    name: "image-0",
    defaultValue: null,
  });

  const recipeImg1 = useWatch({
    control,
    name: "image-1",
    defaultValue: null,
  });

  const recipeImg2 = useWatch({
    control,
    name: `image-2`,
    defaultValue: null,
  });

  const recipeImg3 = useWatch({
    control,
    name: `image-3`,
    defaultValue: null,
  });

  const recipeImg4 = useWatch({
    control,
    name: `image-4`,
    defaultValue: null,
  });

  const recipeImg5 = useWatch({
    control,
    name: `image-5`,
    defaultValue: null,
  });

  const recipeImg6 = useWatch({
    control,
    name: `image-6`,
    defaultValue: null,
  });
  const recipeImg7 = useWatch({
    control,
    name: `image-7`,
    defaultValue: null,
  });
  const recipeImg8 = useWatch({
    control,
    name: `image-8`,
    defaultValue: null,
  });
  const recipeImg9 = useWatch({
    control,
    name: `image-9`,
    defaultValue: null,
  });

  const recipeImg10 = useWatch({
    control,
    name: `image-10`,
    defaultValue: null,
  });

  const recipeWatch = [
    recipeImg0,
    recipeImg1,
    recipeImg2,
    recipeImg3,
    recipeImg4,
    recipeImg5,
    recipeImg6,
    recipeImg7,
    recipeImg8,
    recipeImg9,
    recipeImg10,
  ];
  useEffect(() => {
    console.log(recipeImg0);
    console.log(recipeImg1);
    console.log(recipeImg2);
    console.log(recipeImg3);
    console.log(recipeImg4);
    console.log(recipeImg5);
    console.log(recipeImg6);
    console.log(recipeImg7);
    console.log(recipeImg8);
    console.log(recipeImg9);
    console.log(recipeImg10);
  }, [
    recipeImg0,
    recipeImg1,
    recipeImg2,
    recipeImg3,
    recipeImg4,
    recipeImg5,
    recipeImg6,
    recipeImg7,
    recipeImg8,
    recipeImg9,
    recipeImg10,
  ]);

  //add materials
  const [foodname, setFoodname] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");

  //steps
  const [recipeDC, setRecipeDC] = useState("");

  //preview handler
  const [mainImage, setMainImage] = useState(null);
  const [open, setOpen] = React.useState(false);

  const fileHandler = (e) => {
    setMainImage(e.target.files[0]);
  };

  /*-------재료 추가하는 핸들러----------*/
  const AddIngredientHandler = (e) => {
    e.preventDefault();

    const material = {
      name: foodname,
      capacity: foodQuantity,
    };

    if (foodname === "" || foodQuantity === "") {
      return;
    }

    setFoodname("");
    setFoodQuantity("");
    setFoods([...foods, material]);
  };

  /*---------추가된 재료 삭제하는 핸들러----------*/
  const deleteIngredientHandler = (idx) => {
    const deleteFood = foods.filter((food, id) => {
      if (id !== idx) {
        return food;
      }
      return "";
    });

    setFoods(deleteFood);
  };

  /*----------레시피 추가하는 핸들러----------*/
  const addRecipeHandler = () => {
    const textarea = `recipe-${steps.length - 1}`;

    setSteps([...steps, textarea]);
    setRecipeDC("");
  };

  /*----------레시피 추가하는 핸들러----------*/
  const deleteRecipeHandler = (idx) => {
    const deleteBox = steps.filter((recipe, id) => {
      if (id !== idx) {
        return recipe;
      }
      return "";
    });

    setSteps(deleteBox);
  };

  /*-------이미지 업로드---------------*/
  const uploadImage = async (files) => {
    const file = files[0];

    let imageUrl = null;
    if (!file) {
      imageUrl = null;
    } else {
      const data = await axios.get("https://api.eatmeup.me/image/s3url", {
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

      imageUrl = img.url.split("?")[0];
    }
    return imageUrl;
  };

  /*----------submit handler 서버요청-------------ㄴ*/
  const onSubmit = (data) => {
    //data
    const imgArr = [];
    const newRecipe = {};

    uploadImage(data.main_image).then((response) => {
      newRecipe["main_image"] = response;
    });

    for (let el in data) {
      if (el[0] === "i") {
        imgArr.push(data[el]);
      }
    }
    const recipeImage = [];
    const recipeImages = async () => {
      for (let [idx, img] of imgArr.entries()) {
        const modFood = await uploadImage(img);
        recipeImage.push({
          cookingNum: idx + 1,
          recipe: data[`${idx}-recipe`],
          image: modFood,
        });
      }
    };

    recipeImages();

    newRecipe["title"] = data.title;
    newRecipe["description"] = data.description;
    newRecipe["cooking_time"] = data.cooking_time;
    newRecipe["level"] = data.cooking_level;
    newRecipe["foods"] = foods;
    newRecipe["steps"] = recipeImage;

    setOpen(true);
    setTimeout(() => {
      console.log(newRecipe);

      setOpen(false);
      dispatch(editMyrecipe(match.params.id, newRecipe));
      history.push("/user/myrecipe");
    }, 1000);
  };

  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          {/* 사이드바 컴포넌트 */}
          <Sidebar id={1} />

          {/* 레시피 만들기 컨테이너 */}

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color='inherit' />
          </Backdrop>

          {loading ? (
            <Loader />
          ) : (
            <BoxContainer>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* 제목, 요리설명, 메인이미지 컴포넌트 */}
                <MainDCBox>
                  <TitleBox>
                    <div className='title'>Edit Recipe</div>
                  </TitleBox>

                  <DescriptionBox>
                    <DCBox>
                      {/* 레시피 제목 입력창 */}
                      <div>
                        <input
                          {...register("title", {
                            required: "레시피 제목을 입력해 주세요.",
                          })}
                          defaultValue={myrecipe.title}
                          type='text'
                          placeholder='레시피 제목을 입력해 주세요.'
                        />
                        {errors.title ? <p> {errors.title.message}</p> : ""}
                      </div>

                      {/* 레시피 설명 입력창 */}
                      <div>
                        <textarea
                          {...register("description", {
                            required: "레시피에 대한 설명을 입력해 주세요",
                          })}
                          defaultValue={myrecipe.description}
                          placeholder='음식에 대한 설명을 입력해 주세요.'
                        ></textarea>
                        {errors.description ? (
                          <p> {errors.description.message}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </DCBox>

                    {/* 이미지 업로드 */}
                    <ImageArea>
                      <ImageBox>
                        {mainImage ? (
                          <img
                            src={URL.createObjectURL(mainImage)}
                            alt='main'
                          />
                        ) : (
                          <img src={myrecipe.main_image} alt='main' />
                        )}
                      </ImageBox>
                      <div className='input'>
                        <label for='fileInput'>
                          <i className='fas fa-upload'></i> 파일 업로드
                        </label>
                        <input
                          id='fileInput'
                          type='file'
                          {...register("main_image", {
                            required: "레시피 사진을 추가해 주세요",
                          })}
                          onChange={fileHandler}
                        />
                        {errors.main_image ? (
                          <p> {errors.main_image.message}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </ImageArea>
                  </DescriptionBox>
                </MainDCBox>

                {/* 요리 정보 추가 컴포넌트 */}
                <MainDCBox>
                  <div>
                    <div className='subtitle'>• 요리 정보</div>
                  </div>
                  <CookInfomation>
                    <div className='cookinfo'>
                      <i class='fas fa-clipboard-check'></i> 요리레벨
                    </div>
                    <Selector
                      {...register("cooking_level")}
                      defaultValue={myrecipe.level}
                    >
                      <option>초보환영</option>
                      <option>보통</option>
                      <option>어려움</option>
                    </Selector>

                    <div className='cookinfo'>
                      <i class='far fa-clock'></i> 요리시간
                    </div>
                    <Selector
                      {...register("cooking_time")}
                      defaultValue={recipe.cooking_time}
                    >
                      <option>10Min</option>
                      <option>20Min</option>
                      <option>30Min</option>
                      <option>40Min</option>
                      <option>50Min</option>
                      <option>60Min</option>
                      <option>60Min이상</option>
                    </Selector>
                  </CookInfomation>

                  <AddIngredientBox>
                    {/* 재료 추가 작성 영역 */}
                    <div className='cookinfo'>
                      <i class='fas fa-carrot'></i> 요리재료
                    </div>
                    <FlexContainer>
                      <input
                        value={foodname}
                        onChange={(e) => setFoodname(e.currentTarget.value)}
                        placeholder='재료 이름을 적어주세요'
                        type='text'
                      />

                      <input
                        value={foodQuantity}
                        onChange={(e) => setFoodQuantity(e.currentTarget.value)}
                        placeholder='재료의 양을 적어주세요'
                        type='text'
                      />

                      <div>
                        <AddBtn onClick={AddIngredientHandler}>
                          재료 추가
                        </AddBtn>
                      </div>
                    </FlexContainer>

                    {/* 재료추가 영역 */}
                    <TagContainer>
                      <Stack direction='row' spacing={1}>
                        {foods.map((food, idx) => {
                          return (
                            <Chip
                              label={`${food.name} ${food.capacity}`}
                              onDelete={() => deleteIngredientHandler(idx)}
                              key={idx}
                            />
                          );
                        })}
                      </Stack>
                    </TagContainer>
                  </AddIngredientBox>
                </MainDCBox>

                {/* 레시피 메뉴얼 작성 컴포넌트 */}
                <StepsBox>
                  <div>
                    <div className='subtitle'>• 요리 레시피</div>
                  </div>
                  <AddRecipeArea>
                    {steps.map((item, idx) => {
                      return (
                        <AddRecipeBox key={idx}>
                          <div className='steps'>Step {idx + 1}</div>

                          {/* 단계별 레시피 쓰는 영역 */}
                          <div className='cook-recipe_box'>
                            {/* 이미지 업로드 영역 */}

                            <div className='recipeImg_box'>
                              <label for={idx}>
                                <i className='bx bx-image-add'></i>
                              </label>
                              <input
                                type='file'
                                id={idx}
                                {...register(`image-${idx}`, {
                                  required:
                                    "요리 단계별 이미지를 업로드 해보세요.",
                                })}
                              />
                              {recipeWatch[idx] ? (
                                <img
                                  src={URL.createObjectURL(recipeWatch[idx][0])}
                                  alt='img'
                                />
                              ) : item.image ? (
                                <img src={item.image} alt='recipe' />
                              ) : (
                                "요리 단계별 이미지를 업로드 해보세요."
                              )}
                              {errors[`image-${idx}`] ? (
                                <p>{errors[`image-${idx}`].message}</p>
                              ) : (
                                ""
                              )}
                              {""}
                            </div>

                            {/* 단계별 요리법 설명 영역 */}
                            <div className='recipe-dc_box'>
                              <textarea
                                {...register(`${idx}-recipe`, {
                                  required: "레시피를 입력해 주세요",
                                })}
                                defaultValue={item.recipe ? item.recipe : ""}
                                id='textarea'
                                placeholder='요리 레시피를 입력해 주세요.'
                              ></textarea>
                              {errors[`${idx}-recipe`] ? (
                                <p>{errors[`${idx}-recipe`].message}</p>
                              ) : (
                                ""
                              )}
                            </div>

                            {/* 단계 삭제버튼 영역 */}
                            <div>
                              <i
                                className='fas fa-times'
                                onClick={() => deleteRecipeHandler(idx)}
                              ></i>
                            </div>
                          </div>
                        </AddRecipeBox>
                      );
                    })}
                    <BtnArea>
                      {steps.length === 10 ? (
                        ""
                      ) : (
                        <PlusBtn>
                          <i
                            class='far fa-plus-square'
                            onClick={addRecipeHandler}
                          ></i>
                        </PlusBtn>
                      )}
                    </BtnArea>
                  </AddRecipeArea>
                </StepsBox>

                {/* 레시피 추가버튼 영역 */}
                <BtnContainer>
                  <input type='submit' placeholder='레시피 추가' />
                </BtnContainer>
              </form>
              {/* */}
            </BoxContainer>
          )}
        </Container>
      </section>
      <Footer />
    </>
  );
};

const BoxContainer = styled.div`
  width: 77%;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 200px;
    height: 40px;
    cursor: pointer;
    background-color: ${theme.colors.yellow};
    border-radius: 10px;
    color: white;
    border: none;
    font-size: 15px;
    font-weight: 500;
    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
  }
`;

const TitleBox = styled.div`
  width: 85%;
  height: 90px;
  font-weight: bold;
  font-size: 30px;
  line-height: 100px;
  text-indent: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 1500px) {
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    display: block;
    font-size: 25px;
    text-indent: 20px;
  }
`;

const MainDCBox = styled(SectionBox)`
  width: 90%;
  margin: 10px auto;

  .subtitle {
    text-indent: 20px;
    padding-top: 20px;
    font-size: 20px;
    font-weight: 500;
  }

  @media screen and (max-width: 1500px) {
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    display: block;
  }
`;

const StepsBox = styled(SectionBox)`
  width: 90%;
  margin: 18px auto;

  .subtitle {
    text-indent: 20px;
    padding-top: 20px;
    font-size: 20px;
    font-weight: 500;
  }

  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;

const AddBtn = styled(LargeBtn)`
  cursor: pointer;
  background-color: ${theme.colors.yellow};
  border-radius: 10px;
  color: white;
  font-size: 15px;
  font-weight: 500;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;

/* description title box css */
const DescriptionBox = styled.div`
  width: 100%;
  min-height: 400px;
  margin: 0 auto;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ImageArea = styled.div`
  width: 45%;
  label {
    padding: 0.5em 12em;
    border-radius: 10px;
    height: 35px;
    border: 2px solid lightgrey;
    cursor: pointer;
    background-color: #f8f8f8;
    color: grey;
  }

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  div {
    margin-top: 20px;
  }

  .input {
    width: 100%;
    margin-left: 14px;
    margin-top: 37px;
  }
  p {
    color: #bf1650;
    font-size: 12px;
    line-height: 1;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
  @media screen and (max-width: 375px) {
    width: 95%;
    label {
      padding: 0.5em 5em;
      border-radius: 10px;
      height: 30px;
      border: 2px solid lightgrey;
      cursor: pointer;
      background-color: #f8f8f8;
      color: grey;
    }

    input[type="file"] {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    div {
      margin-top: 10px;
    }
  }
`;
const ImageBox = styled.div`
  width: 100%;
  height: 70%;
  border: 2px solid lightgrey;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: grey;
  cursor: pointer;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }

  p {
    color: #bf1650;
    font-size: 12px;
    line-height: 0.1;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  @media screen and (max-width: 375px) {
    height: 230px;
    margin-left: 6px;

    img {
      width: 100%;
      height: 230px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

const DCBox = styled.div`
  width: 50%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 90%;
  }

  input {
    margin-top: 15px;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 2px solid lightgrey;
    text-indent: 5px;
  }

  textarea {
    width: 100%;
    min-height: 220px;
    margin-top: 10px;
    border-radius: 10px;
    border: 2px solid lightgrey;
    text-indent: 5px;
  }
  span {
    margin: 5px;
  }

  p {
    color: #bf1650;
    font-size: 12px;
    line-height: 0.1;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 95%;
    margin: 5px auto;

    div {
      width: 95%;
    }
  }
`;

/* cooking info */
const CookInfomation = styled.div`
  width: 90%;
  display: flex;
  margin: 10px auto;

  .cookinfo {
    margin-left: 10px;
    line-height: 35px;
    color: grey;
  }
  @media screen and (max-width: 375px) {
    display: block;
    width: 95%;
    margin: 8px auto;
    position: relative;
  }
`;

const Selector = styled.select`
  width: 200px;
  height: 40px;
  font-size: 15px;
  border-radius: 10px;
  text-indent: 10px;
  margin-left: 10px;
  outline: none;
  border: 2px solid lightgrey;
`;

/* add ingredient */
const AddIngredientBox = styled.div`
  width: 90%;
  min-height: 150px;
  margin: 10px auto;
  .cookinfo {
    margin-left: 10px;
    color: grey;
  }


  @media screen and (max-width: 375px) {
    display: block;
    width: 95%;
    margin: 8px auto;
    position: relative;
  }
`;

const FlexContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;

  input {
    width: 200px;
    height: 40px;
    margin-right: 8px;
    border-radius: 10px;
    border: 2px solid lightgrey;
    text-indent: 5px;
  }

  input:focus {
    outline: none;
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 95%;
    margin: 8px auto;
    position: relative;

    input{
      margin-top: 6px;
    }
  }
`;

const TagContainer = styled.div`
  width: 900px;
  overflow-x: scroll;
  height: 50px;
  border-radius: 10px;
  padding: 8px 4px;

  @media screen and (max-width: 375px) {
    width: 260px;
  }
`;

const AddIngreBtn = styled.button`
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
`;

/* add steps */

const AddRecipeArea = styled.div`
  width: 100%;
  min-height: 300px;
`;

const AddRecipeBox = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 15px;

  .steps {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
    text-indent: 30px;
  }

  .cook-recipe_box {
    width: 95%;
    margin: 0 auto;
    border: 2px dashed lightgrey;
    min-height: 230px;
    display: flex;
  }

  .recipeImg_box {
    width: 50%;
    height: 250px;
    border: 2px solid lightgrey;
    margin: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: gray;
    cursor: pointer;
    position: relative;

    p {
      position: absolute;
      color: #bf1650;
      top: 257px;
    }

    label {
      cursor: pointer;
      position: absolute;
      top: 0px;
      left: 0px;
      font-size: 45px;
      z-index: 999;
      padding: 0 20px;
      cursor: pointer;
    }

    input[type="file"] {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .bx-image-add {
    color: grey;
  }

  .recipe-dc_box {
    width: 60%;
    height: 90%;
    margin: 10px;
    border-radius: 20px;
  }

  .recipe-dc_box > textarea {
    width: 100%;
    height: 240px;
    border-radius: 10px;
    border: 2px solid lightgrey;
    text-indent: 10px;
    font-size: 14px;
  }

  .fa-times {
    font-size: 30px;
    padding: 10px;
    color: gray;
    cursor: pointer;
  }

  p {
    color: #bf1650;
    font-size: 12px;
    line-height: 1;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  @media screen and (max-width: 375px) {
    display: block;
    width: 95%;
    margin: 5px auto;
    position: relative;

    div {
      width: 95%;
    }

    .cook-recipe_box {
      display: block;
    }

    .recipe-dc_box {
      width: 90%;
  
    }

    .recipeImg_box {
      width: 90%;
    }

    .fa-times {
      position: absolute;
      top: 30px;
      left: 230px;
      z-index: 99999;
    }

  }
`;

const BtnArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

const PlusBtn = styled.div`
  width: 50px;
  font-size: 40px;
  color: grey;
  cursor: pointer;
`;
export default EditRecipePage;
