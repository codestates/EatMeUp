import React from 'react'
import styled from 'styled-components'


const RecipeCard = styled.figure`
  display: inline-block;
  margin: 10px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative; 
  width: calc(100%/4);

  .recipe-dc-left_box {
    width: 80%;
    margin-left: 10px;
  }

  .recipe-img_box {
    width: 100%;
    height: 65%;
  }

  .recipe-img_box > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .recipe-dc_box {
    display: flex;
    justify-content: space-between;
    margin: 0px 10px 10px 10px;
  }

  .recipe-title_box {
    display: flex;
    font-size: 17px;
    font-weight: 500;
    font-family: Noto Sans KR;
  }

  .span_box {
    font-size: 12px;
    background-color: lightgrey;
    color: white;
    text-indent: 0px;
    padding: 0 10px;
    border-radius: 30px;
    line-height: 25px;
    margin-left: 10px;
  }

  .recipe-ingre_box {
    margin-top: 6px;
  }

  .recipe-ingre-label {
    font-size: 12px;
  }

  .recipe-ingres {
    font-size: 10px;
  }

  .recipe-ingres > span {
    padding: 3px 5px 3px 5px;
    margin: 3px;
    border-radius: 20px;
    background-color: #eaeaea;
  }

  .userprofile_box{
    display: flex;
    margin: 10px;
    align-items: center;
  }

  .userimg_box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
  }

  .userimg_box > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .username_box {
    font-size: 12px;
    margin-left: 10px;
  }

  .button_box {
    position: absolute;
    top: 300px;
    left: 150px;
    display: flex;
    align-items: center;
    border: 1px solid lightgrey; 
    border-radius: 20px;
    padding: 0 10px; 
    font-weight: bold;
    text-align: center;
    background-color: #ffffff;
  }

  
  .fa-caret-right {
    font-size: 18px;
  }
`;

const Card = ({ recipe }) => {
  return (
   
          <RecipeCard>
            <div className='userprofile_box'>
                <div className='userimg_box'>
                  <img src='../food_img/people.jpeg' alt='userimg' id='userimg' />
                </div>
                <div className='username_box'>
                  <span className='username'>Segyondgdgg</span>
                </div>
              </div>
            
            <div className='recipe-img_box'>
              <img
                src={recipe.main_image}
                alt='recipe'
                className='recipe-img'
              />
            </div>
            {/* <div className='button_box'>
             View Recipe  <i class="fas fa-caret-right"></i>
             </div> */}
            <div className='recipe-dc_box'>
              <div className='recipe-dc-left_box'>
                <div className='recipe-title_box'>
                <div className='title_box'>{recipe.title}</div>
                </div>
                <div className='recipe-ingre_box'>
                  {/* <div className='recipe-ingre-label'>
                    <span>주재료</span>
                  </div> */}
                  <div className='recipe-ingres'>
                    <span>#돼지전지</span>
                    <span>#양파</span>
                    <span>#대파</span>
                  </div>
                </div>
              </div>
              
            </div>
          </RecipeCard>
       
  );
};

export default Card;
