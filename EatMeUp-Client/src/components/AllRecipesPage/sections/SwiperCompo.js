import React, { useEffect } from "react";
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
    <div>
      <div className='blog-slider'>
        <div className='blog-slider__wrp swiper-wrapper'>
          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>26 December 2019</span>
              <div className='blog-slider__title'>Lorem Ipsum Dolor</div>
              <div className='blog-slider__text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
            </div>
          </div>
          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>26 December 2019</span>
              <div className='blog-slider__title'>Lorem Ipsum Dolor2</div>
              <div className='blog-slider__text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
            </div>
          </div>

          <div className='blog-slider__item swiper-slide'>
            <div className='blog-slider__img'>
              <img
                src='https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80'
                alt=''
              />
            </div>
            <div className='blog-slider__content'>
              <span className='blog-slider__code'>26 December 2019</span>
              <div className='blog-slider__title'>Lorem Ipsum Dolor</div>
              <div className='blog-slider__text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </div>
            </div>
          </div>
        </div>
        <div className='blog-slider__pagination'></div>
      </div>
    </div>
  );
};

export default SwiperCompo;
