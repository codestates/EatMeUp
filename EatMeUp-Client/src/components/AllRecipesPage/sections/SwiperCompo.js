import React, { useEffect } from "react";
import styled from "styled-components";
import "./index.scss";

const { Swiper } = window;

const SwiperCompo = () => {
  useEffect(() => {
    var swiper = new Swiper(".blog-slider", {
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

  return (
    <SwiperContainer>
      <div className='blog-slider'>
        <div className='blog-slider__wrp swiper-wrapper'>
          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='https://i.pinimg.com/564x/10/50/96/105096c070b17b4cc7c45a77c75117e9.jpg'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>26 September 2021</span>
              <div className='blog-slider__title'>제육볶음 
                <span className='cooking-level'>EASY</span>
              </div>
              <div className='blog-slider__text'>
                양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어
                고슬고슬하게 밥을 짓는다. 안심은 불고기 양념하여 30분간 재워
                국물 없이 구워 한 김 식으면 한입 크기로 자른다.
              </div>
              <div className='blog-slider__recipeinfo'>
                <div claName='blog-slider__cookingtime'>
                  <div>조리시간</div>
                  <div><i class="fas fa-stopwatch"></i> 60MIN</div>
                </div>
                <div className='blog-slider__ingredients'>
                  <div className='ingre-label'>주재료</div>
                  <div>
                    <span>#돼지전지 </span>
                    <span>#양파 </span>
                    <span>#대파 </span>
                  </div>
                </div>
              </div>
              {/* <div className='blog-slider__button'>
                  View Recipe
              </div> */}
            </div>
          </div>

          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='https://i.pinimg.com/564x/30/4b/a4/304ba4e8066e710deae9607f826f5cd6.jpg'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>26 September 2021</span>
              <div className='blog-slider__title'>제육볶음 
                <span className='cooking-level'>EASY</span>
              </div>
              <div className='blog-slider__text'>
                양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어
                고슬고슬하게 밥을 짓는다. 안심은 불고기 양념하여 30분간 재워
                국물 없이 구워 한 김 식으면 한입 크기로 자른다.
              </div>
              <div className='blog-slider__recipeinfo'>
                <div claName='blog-slider__cookingtime'>
                  <div>조리시간</div>
                  <div><i class="fas fa-stopwatch"></i> 60MIN</div>
                </div>
                <div className='blog-slider__ingredients'>
                  <div className='ingre-label'>주재료</div>
                  <div>
                    <span>#돼지전지 </span>
                    <span>#양파 </span>
                    <span>#대파 </span>
                  </div>
                </div>
              </div>
              {/* <div className='blog-slider__button'>
                  View Recipe
              </div> */}
            </div>
          </div>

          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='https://i.pinimg.com/564x/06/87/62/06876283a88cff2125f6672a3799a6ca.jpg'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>26 September 2021</span>
              <div className='blog-slider__title'>제육볶음 
                <span className='cooking-level'>EASY</span>
              </div>
              <div className='blog-slider__text'>
                양지머리로 육수를 낸 후 식혀 기름을 걷어낸 후, 불린 쌀을 넣어
                고슬고슬하게 밥을 짓는다. 안심은 불고기 양념하여 30분간 재워
                국물 없이 구워 한 김 식으면 한입 크기로 자른다.
              </div>
              <div className='blog-slider__recipeinfo'>
                <div claName='blog-slider__cookingtime'>
                  <div>조리시간</div>
                  <div><i class="fas fa-stopwatch"></i> 60MIN</div>
                </div>
                <div className='blog-slider__ingredients'>
                  <div className='ingre-label'>주재료</div>
                  <div>
                    <span>#돼지전지 </span>
                    <span>#양파 </span>
                    <span>#대파 </span>
                  </div>
                </div>
              </div>
              {/* <div className='blog-slider__button'>
                  View Recipe
              </div> */}
            </div>
          </div>
        </div>
        <div className='blog-slider__pagination'></div>
      </div>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  margin-bottom: 15px;
`;

export default SwiperCompo;
