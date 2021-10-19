import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMyrecipe } from "../../../_actions/userActions";

import { Recipes } from "../../StyledComponent/mypage_style";

const { Swal } = window;

const Card = ({ recipe }) => {
  
  const { id, main_image, title, cooking_time, foods } = recipe;

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

  return (
    <Recipes width='90%'>
      {/* 유저프로필과 삭제, 수정버튼을 감싸는 컨테이너 */}

      {/* 레시피메인이미지사진 영역 */}
      <Link to={`/recipe/info/${id}`}>
        <img src={main_image} alt='recipe' className='recipe-img' />
      </Link>

      <div>
        <div className='recipe-info_box'>
          {/* 요리시간 */}
          <div className='time'>
            <i className='far fa-clock'></i> {cooking_time.slice(0, 2)}min
          </div>

          {/* 삭제버튼과 수정버튼 영역 */}
          <div className='dc_box'>
            <div className='recipe-dc-right_box'>
              <Link to={`/user/myrecipe/edit/${id}`}>
                <i className='far fa-edit'></i>
              </Link>
              <i
                className='far fa-trash-alt'
                onClick={() => deleteHandler(id)}
              ></i>
            </div>
          </div>
        </div>

        {/* 레시피제목 */}
        <div className='title_box'>{title}</div>

        {/* 레시피 주재료들 */}
        <div className='recipe-ingre_box'>
          <div className='ingres'>
            {foods.slice(0, 3).map((food, idx) => {
              return <button key={idx}>{food.name}</button>;
            })}
          </div>
        </div>
      </div>
    </Recipes>
  );
};

export default Card;
