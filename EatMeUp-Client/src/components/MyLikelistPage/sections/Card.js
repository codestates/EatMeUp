import React from "react";
import styled from "styled-components";
import { Recipe } from "../../StyledComponent/card";
import theme from "../../StyledComponent/theme";

const Card = ({ recipes }) => {
  return recipes.map((recipe, idx) => {
    return (
      <Recipes width='90%' key={idx}>
        {/* 유저프로필과 삭제, 수정버튼을 감싸는 컨테이너 */}
        <div className='userprofile_box'>
          {/* userprofile 영역 */}
          <div className='userprofile'>
            <div className='userimg_box'>
              <img src='../food_img/people.jpeg' alt='userimg' id='userimg' />
            </div>
            <div className='username_box'>
              <span className='username'>Segyondgdgg</span>
            </div>
          </div>
          {/* 삭제버튼과 수정버튼 영역 */}
          <div>
            <div className='recipe-dc-right_box'>
              <i class='fas fa-heart'></i>
              <i class='far fa-trash-alt'></i>
            </div>
          </div>
        </div>
        {/* 레시피메인이미지사진 영역 */}
        <img src={recipe.main_image} alt='recipe' className='recipe-img' />
        {/* figure태그의 캡션 */}
        <figcaption>
          <div className='recipe-info_box'>
            {/* 요리시간 */}
            <div className='time'>
              <i class='fas fa-stopwatch'></i> 요리시간 20min
            </div>
          </div>
          {/* 레시피제목 */}
          <div className='title_box'>{recipe.title}</div>
          {/* 레시피 주재료들 */}
          <div className='recipe-ingre_box'>
            <div className='ingres'>
              <span>#돼지전지</span>
              <span>#양파</span>
              <span>#대파</span>
            </div>
          </div>
        </figcaption>
      </Recipes>
    );
  });
};

const Recipes = styled(Recipe)`
 border: 1px solid #e6e8e6;
  .userprofile_box {
    display: flex;
    justify-content: space-between;
  }

  .userprofile {
    display: flex;
    align-items: center;
  }

  .fa-heart {
    color: ${theme.colors.red};
    font-size: 20px;
    margin-right: 10px;
  }
  .fa-trash-alt {
    margin-top: 3px;
    font-size: 20px;
    margin-right: 10px;
  }
`;

export default Card;
