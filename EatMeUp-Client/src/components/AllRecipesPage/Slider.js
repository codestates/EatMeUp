import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Swiper } = window;

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "vertical",
      loop: true,
      effect: "fade",
      mousewheel: true,
      autoplay: {
        delay: 4000, // 시간 설정
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  /* 오늘의 레시피로 선정된 레시피들 배열 */
  const mainRecipes = [
    {
      title: "나물비빔밥",
      description:
        "크림 떡볶이는 맵거나 자극적이지 않아서 아이들이나 어르신간식으로 제격인데요!청정원 머쉬룸투움바 파스타소스와 우유로 만드는 크림 떡볶이!",
      main_image: "http://file.okdab.com/UserFiles/searching/recipe/000200.jpg",
      foods: [
        { name: "떡볶이 떡" },
        { name: "양송이 버섯" },
        { name: "우유" },
        { name: "머쉬룸투움바 파스타 소스" },
      ],
    },
    {
      title: "크림 떡볶이",
      description:
        "크림 떡볶이는 맵거나 자극적이지 않아서 아이들이나 어르신간식으로 제격인데요!청정원 머쉬룸투움바 파스타소스와 우유로 만드는 크림 떡볶이!",
      main_image: "https://i.pinimg.com/564x/99/d6/08/99d6084e794e077d2971fe1537f5c04d.jpg",
      foods: [
        { name: "떡볶이 떡" },
        { name: "양송이 버섯" },
        { name: "우유" },
        { name: "머쉬룸투움바 파스타 소스" },
      ],
    },
    {
      title: "비빔밥",
      description:
        "크림 떡볶이는 맵거나 자극적이지 않아서 아이들이나 어르신간식으로 제격인데요!청정원 머쉬룸투움바 파스타소스와 우유로 만드는 크림 떡볶이!",
      main_image: "https://i.pinimg.com/564x/d2/6d/39/d26d39631c69853079ed59fb8e922d6e.jpg",
      foods: [
        { name: "밥" },
        { name: "고사리" },
        { name: "고추장" },
        { name: "참기름" },
      ],
    },
  ];

  return (
    <div class='swiper'>
      <div class='swiper-wrapper'>
        {mainRecipes.map((recipe, idx) => {
          return (
            <div class='swiper-slide'>
              <TodayPick>
                <div>
                  <Title>
                    <i className='fas fa-utensils'></i> Today's Pick
                  </Title>

                  <Lower>
                    <RecipeCard>
                      <img
                        src={recipe.main_image}
                        alt='pick'
                      />
                    </RecipeCard>
                    <RecipeInfo>
                      <div className='recipe-title'>{recipe.title}</div>
                      <div className='cooking-info'>
                        <div className='cooking-time'>
                          요리시간 <i className='far fa-clock'></i> 30MIN
                        </div>
                        <div className='iconBox'>
                          요리레벨
                          <i className='bx bxs-star' id='icon'></i>
                        </div>
                      </div>

                      <div className='recipe-dc'>
                        {recipe.description}
                      </div>
                      <div className='main-materials'>
                        <div>주재료</div>
                        {recipe.foods.map((food, foodIdx) => {
                          return (
                            <span key={foodIdx}>{food.name}</span>
                          )
                        })}
                      </div>

                      <div className='viewBtn'>
                        <Link to='#'>
                          View Recipe <i className='fas fa-play'></i>
                        </Link>
                      </div>
                    </RecipeInfo>
                  </Lower>
                </div>
              </TodayPick>
            </div>
          );
        })}

      </div>
    </div>
  );
};

/* 메인카드 속 today's pick 슬라이드 */
const TodayPick = styled.div`
  width: 100%;
  background-color: #f5f3f0;
  border-radius: 20px;
  height: 460px;
  display: flex;
  align-items: center;

  & > div {
    width: 90%;
    margin: 10px auto;
  }
`;

const Title = styled.div`
  margin: 0 auto;
  font-size: 30px;
  font-weight: bold;
`;

const Lower = styled.div`
  display: flex;
`;

/* 카드에서 이미지 영역 */
const RecipeCard = styled.div`
  width: 40%;
  height: 100%;

  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

/* 카드에서 레시피 정보 영역 */
const RecipeInfo = styled.div`
  width: 60%;
  margin-left: 20px;

  /* 레시피  제목과 설명 영역 */
  .recipe-title {
    font-size: 25px;
    font-weight: 500;
    margin: 50px 0px 8px 0px;
  }

  .recipe-dc {
    font-size: 14px;
    margin-top: 10px;
  }

  /* 레시피 요리시간, 요리레벨 정보 영역 */
  .cooking-info {
    font-size: 14px;
    display: flex;
    margin-top: 5px;
    font-weight: 500;
  }

  .iconBox {
    margin-left: 5px;
    text-indent: 5px;
    font-weight: 500;
    border-left: 2px solid lightgrey;
  }

  .bxs-star {
    color: #febd2f;
    font-size: 15px;
  }

  /* 레시피 주재료 정보 영역 */
  .main-materials {
    font-size: 15px;
    margin-top: 14px;
  }

  .main-materials > div {
    font-weight: 500;
    margin-bottom: 10px;
    text-indent: 5px;
  }

  .main-materials > span {
    padding: 3px 8px;
    border-radius: 30px;
    background-color: #eaeaea;
    margin-right: 5px;
  }

  /* 버튼 영역 */
  .viewBtn {
    width: 130px;
    height: 40px;
    background-color: #eb745d;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    margin-top: 20px;
    color: white;
  }

  .viewBtn > a {
    text-decoration: none;
    color: white;
  }
`;

export default Slider;
