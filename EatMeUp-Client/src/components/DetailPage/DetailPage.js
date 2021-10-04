import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToLikelist, removeFromLikelist } from "../../_actions/userActions";
import { getUserinfo } from "../../_actions/userActions";
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

const DetailePage = ({ match }) => {
  const dispatch = useDispatch();
  const { isAdded, isDeleted, error } = useSelector((state) => state.likelist);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const [getRecipe, setGetRecipe] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likelist, setLikelist] = useState([]);
  const [steps, setSteps] = useState([]);
  const [foods, setFoods] = useState([]);
  const [posteduser, setPostedUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/recipe/info/${match.params.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data.recipeInfo[0])
          setGetRecipe(response.data.recipeInfo[0]);
          setSteps(response.data.recipeInfo[0].steps);
          setFoods(response.data.recipeInfo[0].foods);
          setPostedUser(response.data.recipeInfo[0].user);
          setLikelist(response.data.recipeInfo[0].likeUser);
        }
      });
  }, []);

  useEffect(() => {
    // if (isAuthenticated) {
    //   dispatch(getUserinfo());
    // }

    if (isAdded) {
      dispatch({ type: ADD_TO_LIKELIST_RESET });
    }

    if (isDeleted) {
      dispatch({ type: REMOVE_FROM_LIKELIST_RESET });
    }
  }, [dispatch, isAdded, isDeleted]);

  const likeBtnHandler = (id) => {
    setClicked(!clicked);

    if (!isLiked) {
      const recipeId = {
        id: match.params.id,
      };
      dispatch(addToLikelist(recipeId));
    } else {
      dispatch(removeFromLikelist(id));
    }
  };

  // useEffect(() => {
  //   likelist.forEach((like) => {
  //     console.log(like.id, user.id)
  //     if (like.id === user.id) {
  //       setIsLiked(true);
  //       setClicked(true);
  //     }
  //   });
  // }, [likelist]);

  // console.log(likelist);

  // console.log(isLiked);

  return (
    <div>
      <Header />
      <RecipeContainer>
        <RecipeBox>
          <ImgBox>
            <img src={getRecipe.main_image} alt='recipe_img' />
            <ProfileContainer>
              <div className='profile_img'>
                {posteduser.avatar === null ? (
                  <i class='far fa-user-circle'></i>
                ) : (
                  <img
                    src={posteduser.avatar}
                    alt='userimg'
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              <span className='username'>{posteduser.username}</span>
            </ProfileContainer>
          </ImgBox>

          <TitleBox>
            {getRecipe.title}
            {/* <i
              className={
                isLiked ? "fas fa-heart" : clicked ? "fas fa-heart" : "far fa-heart"
              }
              style={
                isLiked ? { color: theme.colors.red } : clicked ? { color: theme.colors.red } : { color: theme.colors.black } 
              }
              onClick={() => likeBtnHandler(getRecipe.id)}
            ></i> */}
          </TitleBox>

          {getRecipe.level === "초보환영" && (
            <Level>
              <i class='fas fa-star'></i>
              <span className='time'>
                <i class='far fa-clock'></i>
                {getRecipe.cooking_time}
              </span>
            </Level>
          )}
          {getRecipe.level === "보통" && (
            <Level>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <span className='time'>
                <i class='far fa-clock'></i>
                {getRecipe.cooking_time}
              </span>
            </Level>
          )}
          {getRecipe.level === "어려움" && (
            <Level>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <span className='time'>
                <i class='far fa-clock'></i>
                {getRecipe.cooking_time}
              </span>
            </Level>
          )}

          <DescriptionBox>
            <div className='description'>{getRecipe.description}</div>
          </DescriptionBox>

          <FoodsBox>
            <div className='foods_title'>재료</div>
            <div className='foods'>
              {foods.map((food, idx) => {
                let name = food.name;
                let capacity = food.capacity;
                return (
                  <button className='foodtag' key={idx}>
                    {name.concat(capacity)}
                  </button>
                );
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
                        step.image
                          ? step.image
                          : step.image === ""
                          ? "https://ifh.cc/g/dHepyz.png"
                          : "https://ifh.cc/g/dHepyz.png"
                      }
                      alt='step_image'
                      // height={step.image === "" && "130"}
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
  position: relative;
  width: 500px;
  /* height: 500px; */
  display: content;
  margin: 70px auto 20px auto;
  overflow: hidden;
  img {
    border-radius: 30px;
    width: 100%;
    object-fit: cover;
  }
`;

const ProfileContainer = styled.div`
  top: 0px;
  width: 100%;
  height: 60px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  .profile_img {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin: 15px 0 0 20px;
    i {
      font-size: 35px;
      color: ${theme.colors.darkgrey};
      vertical-align: middle;
    }
    img {
      width: 35px;
      color: ${theme.colors.darkgrey};
      vertical-align: middle;
    }
  }
  .username {
    color: ${theme.colors.black};
    margin: 17px;
    font-weight: 400;
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
      margin: 0 5px 0 15px;
      color: ${theme.colors.gray};
    }
  }
`;

const DescriptionBox = styled.div`
  color: #6f6f6f;
  margin: 5px auto;
  .description {
    border-bottom: 2px solid ${theme.colors.lightgrey};
    padding: 10px 5px;
  }
`;

const FoodsBox = styled.div`
  margin: 0 10%;
  .foods_title {
    font-size: 24px;
    font-weight: 400;
    color: ${theme.colors.gray};
    margin: 20px 0;
  }
  .foodtag {
    font-size: 14px;
    height: 32px;
    border: none;
    background-color: ${theme.colors.lightgrey};
    border-radius: 30px;
    margin: 0px 5px 5px 0px;
    padding: 5px 10px;
    font-family: "Noto Sans KR";
    font-weight: 300;
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
    img {
      border-radius: 20px;
      width: 170px;
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
  }
  .step {
    margin: 4px 0;
  }
`;

export default DetailePage;
