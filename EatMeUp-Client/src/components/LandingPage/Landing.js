import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import theme from "../StyledComponent/theme";

/* 스타일 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import GoToTop from "./GoToTop";
import ScrollDown from "./ScrollDown";

const Landing = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    console.log(window.scrollY)
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // component unmount 되기 전에 이벤트 제거
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <LandingContainer>
        <Landing1>
          <div>
            {/* scrollY = 80일때부터 서서히 나타나고 200 넘어설 때부턴, 점점 흐려지며 사라짐 */}
            {position > 200 ? (
              <i
                class='far fa-comment-dots'
                style={{ opacity: (250 - position) / 50 }}
              ></i>
            ) : (
              <i
                class='far fa-comment-dots'
                style={{ opacity: (position - 80) / 50 }}
              ></i>
            )}
          </div>
        </Landing1>
        <Landing2>
          {/* scrollY = 350일때부터 서서히 나타나고 500 넘어설 때부턴, 점점 흐려지며 사라짐 */}
          {position > 500 ? (
            <div className='cooler'>
              <img
                src='../food_img/cooler.png'
                alt='cooler'
                style={{
                  opacity: (750 - position) / 80,
                  width: position - 200,
                }}
              />
              <i
                class='far fa-comment-dots'
                style={{ opacity: (650 - position) / 80 }}
              ></i>
            </div>
          ) : (
            <div className='cooler'>
              <img
                src='../food_img/cooler.png'
                alt='cooler'
                style={{ opacity: (position - 350) / 80 }}
              />
              <i
                class='far fa-comment-dots'
                style={{ opacity: (position - 350) / 80 }}
              ></i>
            </div>
          )}
        </Landing2>
        <Landing3>
          {/* scrollY = 750일때부터 서서히 나타나고 1000 넘어설 때부턴, 점점 흐려지며 사라짐 */}
          {position > 1000 ? (
            <>
              <div className='cooler_full'>
                <img
                  src='../food_img/cooler_full.png'
                  alt='cooler_full'
                  style={{
                    opacity: (1050 - position) / 50,
                  }}
                />
              </div>
              <div className='octopus1'>
                <img
                  src='../food_img/octopus.png'
                  alt='octopus'
                  id='octopus'
                  style={{ opacity: 1230 - position, left: position - 40 }}
                />
              </div>
            </>
          ) : (
            <>
              <div className='cooler_full'>
                <img
                  src='../food_img/cooler_full.png'
                  alt='cooler_full'
                  style={{ opacity: (position - 750) / 80 }}
                />
              </div>
              <div className='octopus2'>
                <img
                  src='../food_img/octopus.png'
                  alt='octopus'
                  style={{ opacity: (position - 750) / 80 }}
                />
              </div>
            </>
          )}
          {/* 2150 가운데 나타남 */}
          {position > 2150 ? (
            <div>
              <div className='move_octopus'>
                <img
                  src='../food_img/octopus.png'
                  alt='octopus'
                  id='octopus'
                  style={{
                    opacity: 2640 - position,
                    left: position - 1190,
                  }}
                />
              </div>
              <div className='eatmeup'>
                <img
                  src='../food_img/octopus_say.png'
                  alt='octopus'
                  id='octopus'
                  style={{ opacity: (2200 - position) / 50 }}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className='move_octopus'>
                <img
                  src='../food_img/octopus.png'
                  alt='octopus'
                  id='octopus'
                  style={{ opacity: position - 1229 }}
                />
              </div>
              <div className='eatmeup'>
                <img
                  src='../food_img/octopus_say.png'
                  alt='octopus'
                  id='octopus'
                  style={{ opacity: (position - 1229) / 80 }} // 나타나기
                />
              </div>
            </div>
          )}
          {position > 2780 ? (
            <div className='move_octopus'>
              <img
                src='../food_img/octopus.png'
                alt='octopus'
                id='octopus'
                style={{
                  opacity: (2980 - position) / 70,
                  left: 1450,
                  width: 2970 - position,
                  zIndex: 50,
                }}
              />
            </div>
          ) : (
            <div className='move_octopus'>
              <img
                src='../food_img/octopus.png'
                alt='octopus'
                id='octopus'
                style={{
                  opacity: position - 2639,
                  left: 1450,
                  zIndex: 9999,
                }}
              />
            </div>
          )}
        </Landing3>
        <Landing4>
          {position > 2975 ? (
            <div>
              <div className='cooler_in'>
                <img
                  src='../food_img/mycooler_add.png'
                  alt='my_cooler'
                  style={{ opacity: 2975 - position, left: 3542 - position }}
                />
              </div>
              <div
                className='description'
                style={{ opacity: (3590 - position) / 80 }}
              >
                <span>마이 냉장고</span>
                <div className='p'>
                  재료를 손쉽게 등록하고, drag&drop으로 관리하세요
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className='cooler_in'>
                <img
                  src='../food_img/mycooler_add.png'
                  alt='my_cooler'
                  style={{
                    opacity: (position - 2780) / 80,
                    left: 3542 - position,
                  }}
                />
              </div>
              <div
                className='description'
                style={{ opacity: (position - 2780) / 80 }}
              >
                <span>마이 냉장고</span>
                <div className='p'>
                  재료를 손쉽게 등록하고, drag&drop으로 관리하세요
                </div>
              </div>
            </div>
          )}

          {position > 3190 ? (
            <div className='cooler_in'>
              <img
                src='../food_img/mycooler_drag.png'
                alt='my_cooler'
                style={{ opacity: (3590 - position) / 80, left: 567 }}
              />
              <div className='cooler_in'>
                <img
                  src='../food_img/mycooler_add.png'
                  alt='my_cooler'
                  style={{ opacity: (3190 - position) / 80 }}
                />
              </div>
            </div>
          ) : (
            <div className='cooler_in'>
              <img
                src='../food_img/mycooler_drag.png'
                alt='my_cooler'
                style={{ opacity: (position - 3190) / 80, left: 567 }}
              />
              <img
                src='../food_img/mycooler_add.png'
                alt='my_cooler'
                style={{ opacity: position - 2975, left: 567 }}
              />
            </div>
          )}
        </Landing4>

        <Landing5>
          {position > 3975 ? ( // 3975
            <div>
              <img
                src='../food_img/recommend.png'
                alt='recommend recipe'
                style={{ opacity: (4180 - position) / 80 }}
              />
              <div
                className='description'
                style={{ opacity: (4180 - position) / 80 }} // 4180부터 사라짐
              >
                <span className='title'>재료 기반 레시피 추천</span>
                <div className='p'>
                  원하는 재료를 골라, 레시피를 추천받아 보세요
                </div>
              </div>
            </div>
          ) : (
            <div>
              <img
                src='../food_img/recommend.png'
                alt='recommend recipe'
                style={{ opacity: (position - 3590) / 80 }}
              />
              <div
                className='description'
                style={{ opacity: (position - 3590) / 80 }}
              >
                <span className='title'>재료 기반 레시피 추천</span>
                <div className='p'>
                  원하는 재료를 골라, 레시피를 추천받아 보세요
                </div>
              </div>
            </div>
          )}
        </Landing5>
        <Landing6>
          {position > 4580 ? ( // 3975
            <div>
              <img
                src='../food_img/meal_plan.png'
                alt='meal planner'
                style={{ opacity: (4780 - position) / 80 }}
              />
              <div
                className='description'
                style={{ opacity: (4780 - position) / 80 }} // 4180부터 사라짐
              >
                <span className='title'>식단표</span>
                <div className='p'>추천받은 레시피로 식단을 계획해 보세요</div>
              </div>
            </div>
          ) : (
            <div>
              <img
                src='../food_img/meal_plan.png'
                alt='meal planner'
                style={{ opacity: (position - 4180) / 80 }}
              />
              <div
                className='description'
                style={{ opacity: (position - 4180) / 80 }}
              >
                <span className='title'>식단표</span>
                <div className='p'>추천받은 레시피로 식단을 계획해 보세요</div>
              </div>
            </div>
          )}
        </Landing6>
        <Landing7>
          <div className='ending' style={{ opacity: (position - 4780) / 80 }}>
            {position > 4780 && (
              <div>
                <h1>
                  식재료 구입 후 냉장고 한 구석에 방치해 놓고 있진 않으신가요?
                </h1>
                <h1>
                  사용하고 애매하게 남은 식재료로 뭘 해먹을 수 있을지
                  고민이라구요?
                </h1>
              </div>
            )}
            <div className='end'>지금 바로, EatMeUp 하세요!</div>
          </div>
        </Landing7>
        <ScrollDown />
        <GoToTop />
      </LandingContainer>
      <Footer />
    </>
  );
};

const LandingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Landing1 = styled.div`
  width: 100vw;
  height: 945px;
  background-color: black;
  place-items: center;
  justify-content: center;
  align-items: center;
  i {
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    font-size: 100px;
    color: ${theme.colors.yellow};
  }
`;

const Landing2 = styled.div`
  width: 100vw;
  height: 945px;
  background-color: black;
  place-items: center;
  justify-content: center;
  align-items: center;
  .cooler > img {
    width: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    margin: 0 auto;
  }
  i {
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(180%, -100%);
    font-size: 100px;
    color: ${theme.colors.yellow};
  }
`;

const Landing3 = styled.div`
  width: 100vw;
  height: 945px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  .cooler_full > img {
    height: 90vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    margin: 0 auto;
  }

  .octopus1 > img {
    width: 10%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-170%, -30%);
    margin: 0 auto;
  }
  .octopus2 > img {
    width: 10%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-170%, -30%);
    margin: 0 auto;
  }

  .move_octopus > img {
    width: 10%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
  }

  .eatmeup > img {
    width: 180px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(40%, -140%);
  }
`;

const Landing4 = styled.div`
  width: 100vw;
  height: 945px;
  .cooler_in > img {
    height: 60vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(50%, -40%);
  }
  .description {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-140%, -35%);
    /* margin: 10% 0; */
  }
  span {
    margin: 22px 0;
    font-size: 40px;
    font-weight: 600;
  }
  .p {
    margin: 20px 0;
    font-size: 24px;
    font-weight: 400;
  }
`;

const Landing5 = styled.div`
  width: 100vw;
  height: 945px;
  img {
    height: 70vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-10%, -35%);
  }
  .description {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-150%, -35%);
  }
  .title {
    margin: 22px 0;
    font-size: 40px;
    font-weight: 600;
  }
  .p {
    margin: 20px 0;
    font-size: 24px;
    font-weight: 400;
  }
`;

const Landing6 = styled.div`
  width: 100vw;
  height: 400px;
  img {
    height: 80vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -40%);
  }
  .description {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-170%, -35%);
    /* margin: 10% 0; */
  }
  .title {
    margin: 22px 0;
    font-size: 40px;
    font-weight: 600;
  }
  .p {
    margin: 20px 0;
    font-size: 24px;
    font-weight: 400;
  }
`;

const Landing7 = styled.div`
  width: 100vw;
  height: 100vh;
  /* position: fixed; */
  .ending {
    /* margin: 10% 0 0 0; */
    img {
      height: 10vh;
      margin: 100px 0;
    }
  }
  .end {
    font-size: 35px;
    margin: 300px 0 0px 0;
    /* font-weight: 400; */
  }
`;

export default Landing;
