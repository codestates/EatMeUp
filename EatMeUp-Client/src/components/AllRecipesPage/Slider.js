import React, { useEffect } from "react";
import "./slider.scss";
const { Swiper } = window;

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });
  }, []);

  /* 오늘의 레시피로 선정된 레시피들 배열 */

  return (
    <div className='swiper'>
      <div className='blog-slider'>
        <div className='blog-slider__wrp swiper-wrapper'>
          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='https://i.pinimg.com/originals/52/98/41/529841e5fd38290b909cffc74bdef726.jpg'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>10 October 2021</span>
              <div className='blog-slider__title'>불고기 비빔밥</div>
              <div className='blog-slider__text'>
                전 세계인이 사랑하는 한식, 비빔밥과 불고기가 만났어요! 색감이
                다양한 야채들과 씹을수록 고소한 불고기까지 듬뿍~ 노른자 톡
                터트려 쓱쓱 비벼 먹으면 다른 메뉴 부럽지 않은 완벽한 한 그릇이
                된답니다
              </div>
              <div className='blog-slider__info'>
                <div>
                  <div className='cooking-time'>
                    <div>조리시간</div>
                    <div className="time">40분 이내</div>
                  </div>
                </div>
                <div className='materials'>
                  <div>주재료</div>
                  <div className='material'>
                    <button>쇠고기</button>
                    <button>당근</button>
                    <button>고추장</button>
                    <button>밥1공기</button>
                  </div>
                </div>
              </div>

              {/* <a href='#' className='blog-slider__button'>
                View Recipe
              </a> */}
            </div>
          </div>
          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='https://i.pinimg.com/564x/3b/57/85/3b5785807a8866abfe1996ba6fea6997.jpg'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>10 October 2021</span>
              <div className='blog-slider__title'>감자탕</div>
              <div className='blog-slider__text'>
                감자와 등뼈를 듬뿍 넣고 끓여 낸 감자탕! 그래서 감자탕일까요?
                사실 감자탕이라는 이름은 감자와는 무관하다고 해요. 감자탕이라는
                이름은 돼지 등뼈에 든 척수를 ‘감자’라고 부른 데서 유래했다는
                이야기가 있습니다. 
                
                {/* 돼지 등뼈와 함께 감자, 우거지, 깻잎, 들깻가루
                등을 넣어 푹 끓인 감자탕은 한 끼 식사뿐만 아니라 술안주로도
                최고랍니다! */}
              </div>
              <div className='blog-slider__info'>
                <div>
                  <div className='cooking-time'>
                    <div>조리시간</div>
                    <div className="time">60분 이내</div>
                  </div>
                </div>
                <div className='materials'>
                  <div>주재료</div>
                  <div className='material'>
                    <button>돼지등뼈</button>
                    <button>들깻가루</button>
                    <button>깻잎</button>
                    <button>감자</button>
                  </div>
                </div>
              </div>
              {/* <a href='#' class='blog-slider__button'>
                View Recipe
              </a> */}
            </div>
          </div>

          <div class='blog-slider__item swiper-slide'>
            <div class='blog-slider__img'>
              <img
                src='https://i.pinimg.com/564x/1a/91/ae/1a91aefc6a9d3c45b2c3fd70552e9e92.jpg'
                alt=''
              />
            </div>
            <div class='blog-slider__content'>
              <span class='blog-slider__code'>10 October 2021</span>
              <div class='blog-slider__title'>연포탕</div>
              <div class='blog-slider__text'>
                대개 낙지를 매운 고추장 양념으로 먹는 것과 달리 연포탕은 낙지를
                그대로 요리해 낙지 본연의 맛을 살리는 것이 특징이에요! 연포탕의
                뜨끈한 국물을 마시면, 추위도 거뜬하게 이겨낼 힘이 생길 것
                같은데요. 
                {/* 바다의 영양을 듬뿍 머금은 낙지와 바지락에 무와
                미나리까지 넣어 시원함을 더했답니다. 보약만큼 든든한 낙지 연포탕
                레시피를 만나보세요. */}
              </div>
              <div class='blog-slider__info'>
                <div>
                  <div className='cooking-time'>
                    <div>조리시간</div>
                    <div className="time">40분 이내</div>
                  </div>
                </div>
                <div className='materials'>
                  <div>주재료</div>
                  <div className='material'>
                    <button>바지락 조개</button>
                    <button>알배추</button>
                    <button>낙지</button>
                    <button>미나리</button>
                  </div>
                </div>
              </div>
              {/* <a href='#' className='blog-slider__button'>
                View Recipe
              </a> */}
            </div>
          </div>
        </div>
        <div className='blog-slider__pagination'></div>
      </div>
    </div>
  );
};

export default Slider;
