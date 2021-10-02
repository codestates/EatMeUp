import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyLikelist,
  addToLikelist,
  removeFromLikelist,
} from "../../_actions/userActions";
import {
  ADD_TO_LIKELIST_RESET,
  REMOVE_FROM_LIKELIST_RESET,
} from "../../_types/userTypes";
import axios from "axios";

/* 컴포넌트 */
import Header from "../Util/Header";
import Footer from "../Util/Footer";

/* 스타일 컴포넌트 */
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

/* 데이터 */
import { myRecipes } from "../dummydata";

const DetailePage = ({ match }) => {
  const dispatch = useDispatch();
  const { isAdded, isDeleted, error } = useSelector((state) => state.likelist);

  const [getRecipe, setGetRecipe] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [steps, setSteps] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/recipe/info/${match.params.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data)
          setGetRecipe(response.data.recipeInfo);
          setSteps(response.data.recipeInfo.steps);
          setFoods(response.data.recipeInfo.foods);
          if(response.data.recipeInfo.likeUser.length > 0) {
            setIsLiked(true)
          }
        }
      });
  }, []);

  useEffect(() => {
    dispatch(getMyLikelist());
    if (isAdded) {
      dispatch({ type: ADD_TO_LIKELIST_RESET });
    }

    if (isDeleted) {
      dispatch({ type: REMOVE_FROM_LIKELIST_RESET });
    }
  }, [dispatch, isAdded, isDeleted]);

  const likeBtnHandler = (id) => {
    setClicked(!clicked);

    if (!clicked) {
      const recipeId = {
        id: match.params.id,
      };
      dispatch(addToLikelist(recipeId));
    } else {
      dispatch(removeFromLikelist(id));
    }
  };

  return (
    <div>
      <Header />

      <RecipeContainer>
        <RecipeBox>
          <ImgBox>
            <img src={getRecipe.main_image} alt='recipe_img' />
          </ImgBox>
          <TitleBox>
            {getRecipe.title}

            <i
              className={isLiked ? "fas fa-heart" : "far fa-heart"}
              style={isLiked ? { color: "red" } : { color: "black" }}
              onClick={() => likeBtnHandler(getRecipe.id)}
            ></i>
          </TitleBox>
          {/* <Level>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            {myRecipes[0].level}
          </Level> */}
          <DescriptionBox>
            <DescriptionImg>
              <i class='fas fa-quote-left'></i>
            </DescriptionImg>
            <div className='description'>{getRecipe.description}</div>
          </DescriptionBox>
          <FoodsBox>
            <div className='foods_title'>재료</div>
            <div className='foods'>
              {foods.map((food, idx) => {
                let name = food.name;
                let capacity = food.capacity;
                return <span className='foodtag'>{name.concat(capacity)}</span>;
              })}
            </div>
          </FoodsBox>
          <StepContainer>
            <div className='step_title'>조리과정</div>

            {steps.map((step, idx) => {
              return (
                <StepBox key={idx}>
                  <div className='step_image'>
                    <img
                      src={
                        step.image === ""
                          ? "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13073440&thumbAt=Y&thumbSe=t_thumb&wrtTy=10004&filePath=L2Rpc2sxL25ld2RhdGEvMjAxOC85OC9DTFMyLzEzMDczNDQwX0NOVFJfV1JUMjAxODA0MjZfMjY3"
                          : step.image
                      }
                      alt='step_image'
                    />
                  </div>
                  <div className='steps'>
                    <div className='stepNo'>
                      <span class='fa-stack'>
                        <i
                          class='fas fa-circle fa-stack-2x'
                          style={{ color: theme.colors.lightgrey }}
                        />
                        <strong class='fa-stack-1x'>{step.cookingNum}</strong>
                      </span>
                    </div>
                    <span className='step'>{step.recipe}</span>
                  </div>
                </StepBox>
              );
            })}
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
    width: 40%;
    object-fit: cover;
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
    cursor: pointer;
  }
`;

const Level = styled.div`
  color: ${theme.colors.yellow};
  background-color: ${theme.colors.lightgrey};
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const DescriptionBox = styled.div`
  color: #6f6f6f;
  margin: 10px auto;
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
    padding: 5px;
 
  }

  .foodtag {
    padding: 5px 8px;
    background-color: ${theme.colors.lightgrey};
    border-radius: 30px;
    margin: 7px 4px;
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
      object-fit: cover;
      border: 1px solid lightgrey;
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
    margin: 0 10px;
  }
`;

export default DetailePage;
