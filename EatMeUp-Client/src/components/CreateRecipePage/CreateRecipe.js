import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* 컴포넌트 */
import Header from "../Util/Header";
import Description from "./sections_add/Description";
import AddIngredient from "./sections_add/AddIngredient";
import Steps from "./sections_add/Steps";
import Footer from "../Util/Footer";
import Sidebar from "../Util/Sidebar";
import CookInfo from './sections_add/CookInfo'

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const CreateRecipe = () => {
  /* function */

  //description
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  //add cooking info
  const [cookingTime, setCookingTime] = useState("");
  const [cookingLevel, setCookingLevel] = useState("");

  //add materials
  const [foodname, setFoodname] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [materials, setMaterials] = useState([])

  //steps
  const [menuals, setMenuals] = useState([]);
  

  


  const createRecipeHandler = () => {
    console.log('hello')

    const newRecipe = {
      title: title,
      description: description,
      main_image: "http://file.okdab.com/UserFiles/searching/recipe/000200.jpg",
      cooking_time: cookingTime,
      cooking_level: cookingLevel,
      foods: materials,
      steps: menuals
    }
    console.log(newRecipe)
    
  }


  return (
    <>
      <Header id={2} />
      <section>
        <Container>
          {/* 사이드바 컴포넌트 */}
          <Sidebar id={1} />

          {/* 레시피 만들기 컨테이너 */}
          <BoxContainer>
            {/* 제목, 요리설명, 메인이미지 컴포넌트 */}
            <MainDCBox>
              <TitleBox>
                <div className='title'>New Recipe</div>
              </TitleBox>
              <Description 
              title={title} 
              setTitle={setTitle} 
              description={description} 
              setDescription={setDescription} />
            </MainDCBox>

             {/* 재료 추가 컴포넌트 */}
             <MainDCBox>
              <div>
                <div className='subtitle'>• 요리 정보</div>
              </div>
              <CookInfo 
              cookingTime={cookingTime}
              setCookingTime={setCookingTime}
              cookingLevel={cookingLevel}
              setCookingLevel={setCookingLevel}
              />
            </MainDCBox>

            {/* 재료 추가 컴포넌트 */}
            <MainDCBox>
              <div>
                <div className='subtitle'>• 재료 추가</div>
              </div>
              <AddIngredient 
              foodname={foodname}
              setFoodname={setFoodname}
              foodQuantity={foodQuantity}
              setFoodQuantity={setFoodQuantity}
              materials={materials}
              setMaterials={setMaterials}
              />
            </MainDCBox>

            {/* 레시피 메뉴얼 작성 컴포넌트 */}
            <StepsBox>
              <div>
                <div className='subtitle'>• 요리 레시피</div>
              </div>
              <Steps 
              menuals={menuals} 
              setMenuals={setMenuals}
              />
            </StepsBox>

            {/* 레시피 추가버튼 영역 */}
            <BtnContainer>
              <AddBtn 
              onClick={createRecipeHandler}
              fillColor={theme.colors.yellow}>
                레시피 추가하기
              </AddBtn>
            </BtnContainer>
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
`
export default CreateRecipe;
