import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMyrecipe } from "../../../_actions/userActions";

import { Recipe } from "../../StyledComponent/card";

const { Swal } = window;

const Card = ({ recipes }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Delete",
      text: "레시피를 삭제하시겠습니까?",
      icon: "warning",
      showCancleButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제하기",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMyrecipe(id));
      }
    });
  };
  return recipes.map((recipe, idx) => {
    return (
      <Recipes width='90%' key={idx}>
        {/* 유저프로필과 삭제, 수정버튼을 감싸는 컨테이너 */}
        <div className='userprofile_box'>
          {/* userprofile 영역 */}
          <div className='userprofile'>
            <div className='userimg_box'>
              <img
                src={
                  recipe.main_image
                    ? recipe.main_image
                    : "../../food_img/people.jpeg"
                }
                alt='userimg'
                id='userimg'
              />
            </div>
            <div className='username_box'>
              <span className='username'>Segyondgdgg</span>
            </div>
          </div>

          {/* 삭제버튼과 수정버튼 영역 */}
          <div>
            <div className='recipe-dc-right_box'>
              <Link to={`/user/myrecipe/edit/${recipe.id}`}>
                <i class='far fa-edit'></i>
              </Link>
              <i
                class='far fa-trash-alt'
                onClick={() => deleteHandler(recipe.id)}
              ></i>
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
              <i className='far fa-clock'></i> 요리시간 20min
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
  .far {
    font-size: 20px;
    margin-right: 10px;
  }

  .fa-trash-alt {
    margin-top: 3px;
    cursor: pointer;
  }

  .fa-clock {
    font-size: 12px;
    margin: 0;
  }
`;

export default Card;
