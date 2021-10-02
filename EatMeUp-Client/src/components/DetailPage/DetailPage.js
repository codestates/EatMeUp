import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* 컴포넌트 */
import Header from "../Util/Header";
import Footer from "../Util/Footer";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

/* 데이터 */
import { myRecipes } from "../dummydata";

const DetailePage = () => {
  // 조리시간 , 난이도, 유저이미지 및 아이디,
  return (
    <div>
      <Header />
      <RecipeContainer>
        <RecipeBox>
          <ImgBox>
            <img src={myRecipes[0].main_image} alt='recipe_img' />
          </ImgBox>
          <TitleBox>
            {myRecipes[0].title}
            <i class='far fa-heart'></i>
          </TitleBox>
          {/* {myRecipes[0].level === "쉬움" && (
            <Level>
              {" "}
              <i class='fas fa-star'></i>
            </Level>
          )}
          {myRecipes[0].level === "보통" && (
            <Level>
              {" "}
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </Level>
          )}
          {myRecipes[0].level === "어려움" && (
            <Level>
              {" "}
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </Level>
          )} */}
          <Level>
            {" "}
            <span className='level'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </span>
            <span className='time'><i class="far fa-clock"></i>60min</span>
          </Level>
          {/* <Time><i class="fas fa-stopwatch"></i>{}</Time> */}
          <DescriptionBox>
            <DescriptionImg>
              {/* <i class='fas fa-quote-left'></i> */}
            </DescriptionImg>
            <div className='description'>{myRecipes[0].description}</div>
          </DescriptionBox>
          <FoodsBox>
            <div className='foods_title'>재료</div>
            <div className='foods'>
              {/* {myRecipes.map((recipe, idx) => {
                let name = recipe.foods[0].name;
                let capacity = recipe.foods[0].capacity;
                return name.concat(capacity);
              })} */}
              {myRecipes[0].foods[0].name}
              {myRecipes[0].foods[0].capacity}
            </div>
          </FoodsBox>
          <StepContainer>
            <div className='step_title'>조리과정</div>
            <StepBox>
              <div className='step_image'>
                <img src={myRecipes[0].steps[0].image} alt='step_image' />
              </div>
              <div className='steps'>
                <div className='stepNo'>
                  <span class='fa-stack'>
                    <i
                      class='fas fa-circle fa-stack-2x'
                      style={{ color: theme.colors.lightgrey }}
                    />
                    <strong class='fa-stack-1x'>
                      {myRecipes[0].steps[0].cookingNo}
                    </strong>
                  </span>
                </div>
                <span className='step'>{myRecipes[0].steps[0].recipe}</span>
              </div>
            </StepBox>

            <StepBox>
              <div className='step_image'>
                <img src={myRecipes[0].steps[1].image} alt='step_image' />
              </div>
              <div className='steps'>
                <div className='stepNo'>
                  <span class='fa-stack'>
                    <i
                      class='fas fa-circle fa-stack-2x'
                      style={{ color: theme.colors.lightgrey }}
                    />
                    <strong class='fa-stack-1x'>
                      {myRecipes[0].steps[1].cookingNo}
                    </strong>
                  </span>
                </div>
                <span className='step'>{myRecipes[0].steps[1].recipe}</span>
              </div>
            </StepBox>

            <StepBox>
              <div className='step_image'>
                {myRecipes[0].steps[2].image === null ? (
                  <img src={myRecipes[0].steps[2].image} alt='step_image' />
                ) : (
                  <img src='../../food_img/cooking.png' />
                )}
              </div>
              <div className='steps'>
                <div className='stepNo'>
                  <span class='fa-stack'>
                    <i
                      class='fas fa-circle fa-stack-2x'
                      style={{ color: theme.colors.lightgrey }}
                    />
                    <strong class='fa-stack-1x'>
                      {myRecipes[0].steps[2].cookingNo}
                    </strong>
                  </span>
                </div>
                <span className='step'>{myRecipes[0].steps[2].recipe}</span>
              </div>
            </StepBox>
          </StepContainer>
        </RecipeBox>
      </RecipeContainer>
      <Footer />
    </div>
  );
};

const RecipeContainer = styled(Container)`
  width: 100%;
  height: 100%;
`;

const RecipeBox = styled(SectionBox)`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ImgBox = styled.div`
  /* position: relative; */
  width: 100%;
  display: content;
  /* height: 500px; */
  margin: 70px auto 20px auto;
  text-align: center;
  overflow: hidden;
  /* background-color: ${theme.colors.lightgrey}; */
  img {
    border-radius: 30px;
    /* width: 40%; */
    /* position: absolute;
    width: 100%;
    top: -9999px;
    left: -9999px;
    right: -9999px;
    bottom: -9999px;
    margin: auto; */
  }
`;

const TitleBox = styled.div`
  height: 50px;
  margin: 0 auto;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  i {
    font-size: 28px;
    vertical-align: top;
    margin: 12px 0 0 10px;
  }
`;

const Level = styled.div`
  /* background-color: ${theme.colors.lightgrey}; */
  width: 100%;
  margin: 0 auto;
  text-align: center;
  .level {
    border-right: 1px solid ${theme.colors.lightgrey};
    padding: 0 5px;
  }
  i {
    color: ${theme.colors.yellow};
    font-size: 20px;
    margin: 0 5px;
  }
  .time {
    color: ${theme.colors.gray};
    font-size: 20px;
    i {
      margin: 0 5px;
      padding: 0 5px;
      color: ${theme.colors.gray};
    }
  }
`;

const Time = styled.span`
  display: inline-block;
`

const DescriptionBox = styled.div`
  color: #6f6f6f;
  margin: 5px auto;
  .description {
    border-bottom: 2px solid ${theme.colors.lightgrey};
    padding: 10px 5px;
  }
`;

const DescriptionImg = styled.div`
  font-size: 50px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: rgba(254, 189, 47, 0.2);
`;

const FoodsBox = styled.div`
  margin: 0 10%;
  .foods_title {
    font-size: 24px;
    font-weight: 400;
    color: ${theme.colors.gray};
    margin: 20px 0;
  }
  .foods {
    width: 100%;
    margin: 20px 0;
    font-size: 14px;
  }
`;

const StepContainer = styled.div`
  margin: 0 10% 5% 10%;
  .step_title {
    display: flex;
    flex-direction: row;
    font-size: 24px;
    font-weight: 400;
    color: ${theme.colors.gray};
    margin: 20px 0;
  }
`;

const StepBox = styled.div`
  display: flex;
  margin: 10px 0;
  .step_image {
    display: flex;
    width: 170px;
    height: 130px;
    img {
      border-radius: 20px;
      width: 170px;
      height: 130px;
      object-fit: contain;
    }
  }
  .steps {
    display: flex;
  }
  .stepNo {
    display: flex;
    flex-direction: row;
    margin: 0 10px;
    /* text-align: center; */
    /* background-color: ${theme.colors.yellow}; */
  }
  .step {
    /* display: inline-block; */
    /* margin: 0 10px; */
  }
`;

export default DetailePage;
