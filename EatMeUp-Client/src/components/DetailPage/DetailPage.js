import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToLikelist, removeFromLikelist } from "../../_actions/userActions";
import { logoutRequest } from "../../_actions/authActions";
import { getUserinfo, clearErrors } from "../../_actions/userActions";
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

const { swal } = window;
const DetailePage = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // selector
  const { isAdded, isDeleted } = useSelector((state) => state.likelist);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user, error } = useSelector((state) => state.user);

  // state
  const [getRecipe, setGetRecipe] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likelist, setLikelist] = useState([]);
  const [steps, setSteps] = useState([]);
  const [foods, setFoods] = useState([]);
  const [posteduser, setPostedUser] = useState({
    username: "guest",
    avatar: null,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/recipe/info/${match.params.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          setGetRecipe(response.data.recipeInfo[0]);
          setSteps(response.data.recipeInfo[0].steps);
          setFoods(response.data.recipeInfo[0].foods);
          setLikelist(response.data.recipeInfo[0].likeUser);

          if (response.data.recipeInfo[0].user) {
            setPostedUser(response.data.recipeInfo[0].user);
          }
        } else {
          alert("로그인이 필요합니다.");
        }
      });
  }, [match.params.id]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserinfo());
    }
    if (isAdded) {
      dispatch({ type: ADD_TO_LIKELIST_RESET });
    }

    if (isDeleted) {
      dispatch({ type: REMOVE_FROM_LIKELIST_RESET });
    }

    if (error) {
      swal("Please!", "로그인이 필요합니다.", "warning");
      dispatch(clearErrors());
      dispatch(logoutRequest());
      history.push("/recipes");
    }
  }, [dispatch, isAdded, isDeleted, isAuthenticated, error, history]);

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

  useEffect(() => {
    if (user) {
      likelist.forEach((like) => {
        if (user.id === like.id) {
          setIsLiked(true);
        }
      });
    }
  }, [likelist, user]);

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
                  <i className='far fa-user-circle'></i>
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
            {isLiked === true &&
              (clicked ? (
                <i
                  onClick={() => likeBtnHandler(getRecipe.id)}
                  className='far fa-heart'
                  style={{ color: theme.colors.black }}
                ></i>
              ) : (
                <i
                  onClick={() => likeBtnHandler(getRecipe.id)}
                  className='fas fa-heart'
                  style={{ color: theme.colors.red }}
                ></i>
              ))}
            {isLiked === false &&
              (clicked ? (
                <i
                  onClick={() => likeBtnHandler(getRecipe.id)}
                  className='fas fa-heart'
                  style={{ color: theme.colors.red }}
                ></i>
              ) : (
                <i
                  onClick={() => likeBtnHandler(getRecipe.id)}
                  className='far fa-heart'
                  style={{ color: theme.colors.black }}
                ></i>
              ))}
          </TitleBox>

          {getRecipe.level === "초보환영" && (
            <Level>
              <i className='fas fa-star'></i>
              <span className='time'>
                <i className='far fa-clock'></i>
                {getRecipe.cooking_time}
              </span>
            </Level>
          )}
          {getRecipe.level === "보통" && (
            <Level>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <span className='time'>
                <i className='far fa-clock'></i>
                {getRecipe.cooking_time}
              </span>
            </Level>
          )}
          {getRecipe.level === "어려움" && (
            <Level>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <span className='time'>
                <i className='far fa-clock'></i>
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
                          ? "https://i.ibb.co/DVhnxm4/cooking.png"
                          : "https://i.ibb.co/DVhnxm4/cooking.png"
                      }
                      alt='step_image'
                      width={step.image === "" && "300"}
                    />
                  </div>
                  <div className='steps'>
                    <div className='stepNo'>
                      <span className='fa-stack'>
                        <i
                          className='fas fa-circle fa-stack-2x'
                          style={{ color: theme.colors.lightgrey }}
                        />
                        <strong className='fa-stack-1x'>
                          {step.cookingNum}
                        </strong>
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
  padding: 8% 0 4% 0;
  @media screen and (max-width: 1023px) {
    padding: 13% 0 4% 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 20% 0 3% 0;
    width: 100%;
  }
  @media screen and (max-width: 568px) {
    padding: 20% 0 3% 0;
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding: 23% 0 3% 0;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    padding: 15% 0 3% 0;
    width: 100%;
  }
`;

const RecipeBox = styled(SectionBox)`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1023px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 568px) {
    width: 95%;
  }
  @media screen and (max-width: 450px) {
    width: 95%;
  }
  @media screen and (max-width: 375px) {
    width: 95%;
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 500px;
  display: content;
  margin: 70px auto 20px auto;
  overflow: hidden;
  img {
    border-radius: 30px;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 1023px) {
    max-width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 50px auto 20px auto;
  }
  @media screen and (max-width: 568px) {
    width: 95%;
    margin: 50px auto 20px auto;
  }
  @media screen and (max-width: 450px) {
    width: 80%;
    margin: 45px auto 20px auto;
  }
  @media screen and (max-width: 375px) {
    width: 95%;
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
  box-sizing: border-box;
  max-width: 60%;
  .description {
    border-bottom: 2px solid ${theme.colors.lightgrey};
    box-sizing: border-box;
    width: 100%;
    padding: 10px 5px;
    text-align: center;
  }
  @media screen and (max-width: 1023px) {
    max-width: 60%;
  }
  @media screen and (max-width: 768px) {
    max-width: 60%;
  }
  @media screen and (max-width: 568px) {
    max-width: 80%;
  }
  @media screen and (max-width: 450px) {
    max-width: 80%;
  }
  @media screen and (max-width: 375px) {
    max-width: 80%;
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
  margin: 10px auto;
  .step_image {
    display: flex;
    width: 300px;
    height: 200px;
    border-radius: 20px;
    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 375px) {
      width: 100%;
      height: 100%;
    }
    img {
      border-radius: 20px;
      object-fit: cover;
      @media screen and (max-width: 1024px) {
        width: 60%;
        height: 100%;
        margin: 10px auto;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        margin: 10px auto;
      }
      @media screen and (max-width: 450px) {
        width: 100%;
        height: 100%;
        margin: 10px auto;
      }
      @media screen and (max-width: 375px) {
        width: 100%;
        height: 100%;
        margin: 10px auto;
      }
    }
  }
  .steps {
    display: flex;
    margin: 10px 0;
    /* @media screen and (max-width: 1024px) {
      margin: 10px 0;
    }
    @media screen and (max-width: 768px) {
      margin: 10px 0;
    }
    @media screen and (max-width: 450px) {
      margin: 10px 0;
    }
    @media screen and (max-width: 375px) {
      margin: 10px 0;
    } */
  }
  .stepNo {
    display: flex;
    flex-direction: row;
    margin: 0 10px;
  }
  .step {
    margin: 4px 0;
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 450px) {
    display: block;
  }
  @media screen and (max-width: 375px) {
    display: block;
  }
`;

export default DetailePage;
