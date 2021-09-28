import React, { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

/* 컴포넌트 */
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import Sidebar from "../Util/Sidebar";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const CreateRecipe = () => {
  /* function */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  //add materials
  const [foodname, setFoodname] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [materials, setMaterials] = useState([]);

  //steps
  const [menuals, setMenuals] = useState([]);
  const [recipeBox, setRecipeBox] = useState(["recipe"]);
  const [recipeDC, setRecipeDC] = useState("");
  const [recipeImg, setRecipeImg] = useState(
    "http://file.okdab.com/UserFiles/searching/recipe/000200_p01.jpg",
  );

  const [ingredientTag, setIngredientTag] = useState([]); //재료태그

  //재료 추가하는 핸들러
  const AddIngredientHandler = (e) => {
    e.preventDefault();

    const tag = foodname + foodQuantity;
    const material = {
      name: foodname,
      capacity: foodQuantity,
    };
    if (tag === "") {
      return;
    }
    setIngredientTag([...ingredientTag, tag]);
    setFoodname("");
    setFoodQuantity("");
    setMaterials([...materials, material]);
  };

  //추가된 재료 삭제하는 핸들러
  const deleteIngredientHandler = (idx) => {
    const deleteTag = ingredientTag.filter((tag, id) => {
      if (id !== idx) {
        return tag;
      }
    });

    setIngredientTag(deleteTag);
  };

  const addRecipeHandler = () => {
    const textarea = "recipe";

    setRecipeBox([...recipeBox, textarea]);
    setRecipeDC("");
  };

  //추가된 step영역 삭제하는 핸들러
  const deleteRecipeHandler = (idx) => {
    const deleteBox = recipeBox.filter((recipe, id) => {
      if (id !== idx) {
        return recipe;
      }
    });

    const deleteMenual = menuals.filter((recipe, id) => {
      if (id !== idx) {
        return recipe;
      }
    });

    setRecipeBox(deleteBox);
    setMenuals(deleteMenual);
  };

  const mainImgDropHandler = () => {};
  const stepImgDropHandler = () => {};

  const onSubmit = (data) => {
    const menual = [];

    for (let el in data) {
      console.log(el[2]);
      if (el[2] === "r") {
        menual.push(data[el]);
      }
    }

    const steps = menual.map((recipe, idx) => {
      return {
        cookingNum: idx + 1,
        recipe: recipe,
        image:
          "http://file.okdab.com/UserFiles/searching/recipe/000200_p01.jpg",
      };
    });

    const newRecipe = {
      title: data.title,
      description: data.description,
      cooking_time: data.cooking_time,
      level: data.cooking_level,
      main_image:
        "http://file.okdab.com/UserFiles/searching/recipe/000200_p01.jpg",

      foods: materials,
      steps: steps,
    };

    axios
      .post("https://api.eatmeup.me/myRecipe/info", newRecipe, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          console.log("success");
        }
      });
  };

  const returnidx = (idx) => {
    return idx;
  };

  console.log(errors);

  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          {/* 사이드바 컴포넌트 */}
          <Sidebar id={1} />

          {/* 레시피 만들기 컨테이너 */}
          <BoxContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* 제목, 요리설명, 메인이미지 컴포넌트 */}
              <MainDCBox>
                <TitleBox>
                  <div className='title'>New Recipe</div>
                </TitleBox>

                <DescriptionBox>
                  <DCBox>
                    {/* 레시피 제목 입력창 */}
                    <div>
                      <input
                        {...register("title", {
                          required: "레시피 제목을 입력해 주세요.",
                        })}
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
                  <Dropzone
                    onDrop={mainImgDropHandler}
                    multiple={false}
                    maxSize={800000000}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <ImageBox {...getRootProps()}>
                        <input {...getInputProps()} />

                        <div>
                          <i class='far fa-image'></i>
                        </div>
                      </ImageBox>
                    )}
                  </Dropzone>
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
                  <Selector {...register("cooking_level")}>
                    <option>초보환영</option>
                    <option>보통</option>
                    <option>어려움</option>
                  </Selector>

                  <div className='cookinfo'>
                    <i class='far fa-clock'></i> 요리시간
                  </div>
                  <Selector {...register("cooking_time")}>
                    <option>10Min</option>
                    <option>20Min</option>
                    <option>30Min</option>
                    <option>40Min</option>
                    <option>50Min</option>
                    <option>60Min</option>
                    <option>60Min이상</option>
                  </Selector>
                </CookInfomation>
              </MainDCBox>

              {/* 재료 추가 컴포넌트 */}
              <MainDCBox>
                <div>
                  <div className='subtitle'>• 재료 추가</div>
                </div>
                <AddIngredientBox>
                  {/* 재료 추가 작성 영역 */}
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
                      <AddIngreBtn onClick={AddIngredientHandler}>
                        재료 추가
                      </AddIngreBtn>
                    </div>
                  </FlexContainer>

                  {/* 재료추가 영역 */}
                  <TagContainer>
                    <Stack direction='row' spacing={1}>
                      {ingredientTag.map((food, idx) => {
                        return (
                          <Chip
                            label={food}
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
                  {recipeBox.map((recipe, idx) => {
                    return (
                      <AddRecipeBox key={idx}>
                        <div className='steps'>Step {idx + 1}</div>

                        {/* 단계별 레시피 쓰는 영역 */}
                        <div className='cook-recipe_box'>
                          {/* 이미지 업로드 영역 */}
                          <Dropzone
                            onDrop={stepImgDropHandler}
                            multiple={false}
                            maxSize={800000000}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div
                                className='recipeImg_box'
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />

                                <i class='far fa-image'></i>
                              </div>
                            )}
                          </Dropzone>

                          {/* 단계별 요리법 설명 영역 */}
                          <div className='recipe-dc_box'>
                            <textarea
                              {...register(`${idx}-recipe`, {
                                required: "레시피를 입력해 주세요",
                              })}
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
                    {recipeBox.length === 20 ? (
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

              <input type='submit' />
            </form>
            {/* <BtnContainer>
              <AddBtn 
              onClick={createRecipeHandler}
              fillColor={theme.colors.yellow}>
                레시피 추가하기
              </AddBtn>
            </BtnContainer>*/}
          </BoxContainer>
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
`;

const MainDCBox = styled(SectionBox)`
  width: 85%;
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
`;

const StepsBox = styled(SectionBox)`
  width: 85%;
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

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`;

/* description title box css */
const DescriptionBox = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  width: 40%;
  height: 85%;
  border: 2px solid lightgrey;
  border-radius: 20px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: grey;
  cursor: pointer;
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
    min-height: 190px;
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
`;

/* cooking info */
const CookInfomation = styled.div`
  width: 90%;
  display: flex;
  margin: 10px auto;
  height: 70px;

  .cookinfo {
    margin-left: 10px;
    line-height: 35px;
    color: grey;
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
  width: 100%;
  min-height: 150px;
  margin-top: 18px;
`;

const FlexContainer = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px auto;

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
`;

const TagContainer = styled.div`
  width: 1000px;
  margin: 10px auto;
  overflow-x: scroll;
  height: 50px;
  border: 2px solid lightgrey;
  border-radius: 10px;
  padding: 8px;
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
    width: 40%;
    height: 200px;
    border: 2px solid lightgrey;
    margin: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: gray;
    cursor: pointer;
  }

  .recipe-dc_box {
    width: 60%;
    height: 90%;
    margin: 10px;
    border-radius: 20px;
  }

  .recipe-dc_box > textarea {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    border: 2px solid lightgrey;
    text-indent: 10px;
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
    line-height: 0.1;
  }

  p::before {
    display: inline;
    content: "⚠ ";
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
export default CreateRecipe;
