import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail } from "../../_actions/recipeActions";
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
import Loader from "../Util/Loader";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

/* 데이터 */
import { myRecipes } from "../dummydata";

const DetailePage = ({ match }) => {
  const dispatch = useDispatch();
  const { isAdded, isDeleted, error } = useSelector((state) => state.likelist);
  const { mylikelist } = useSelector((state) => state.mylikelist);
  const { recipe, loading } = useSelector(state => state.recipe);

  const [getRecipe, setGetRecipe] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
const [steps, setSteps] = useState([])
  // mylikelist.forEach((recipe) => {
  //   if (recipe.id === Number(match.params.id)) {
  //     setIsLiked(true);
  //     console.log('jello')
  //   }
  // });

  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_API}/recipe/info/${match.params.id}`, {withCredentials: true}).then(response => {
      console.log(response.data)
      if(response.data) {
        setGetRecipe(response.data.recipeInfo)
        setSteps(response.data.recipeInfo.steps)
      }
    })

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

      {/* {loading ? (
        <Loader />
      ) : ( */}
        <RecipeContainer>
          <RecipeBox>
            <ImgBox>
              <img src={getRecipe.main_image} alt='recipe_img' />
            </ImgBox>
            <TitleBox>
              {getRecipe.title}
              {/* {isLiked ? (
                <i
                  className={clicked ? "far fa-heart" : "fas fa-heart"}
                  style={clicked ? { color: "black" } : { color: "red" }}
                  onClick={() => likeBtnHandler(recipe.id)}
                ></i>
              ) : (
                <i
                  className={clicked ? "fas fa-heart" : "far fa-heart"}
                  style={clicked ? { color: "red" } : { color: "black" }}
                  onClick={() => likeBtnHandler(recipe.id)}
                ></i>
              )} */}
              {/* {isLiked ? (<i className="far fa-heart"></i>) : (<i className="fas fa-heart"></i>)} */}
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
            {/* <FoodsBox>
              <div className='foods_title'>재료</div>
              <div className='foods'>
                {getRecipe.foods.map((food, idx) => {
                  let name = food.name;
                  let capacity = food.capacity;
                  return (
                    <span className='foodtag'>{name.concat(capacity)}</span>
                  );
                })}
              </div>
            </FoodsBox> */}
            <StepContainer>
              <div className='step_title'>조리과정</div>

              {steps.map((step, idx) => {
                return (
                  <StepBox key={idx}>
                    <div className='step_image'>
                      <img
                        src={
                          step.image === ""
                            ? "../../food_img/favicon.png"
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
    padding: 5px;
  }

  .foodtag {
    padding: 5px 7px;
    background-color: ${theme.colors.lightgrey};
    border-radius: 30px;
    margin-right: 7px;
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
