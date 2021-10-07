import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMyrecipe } from "../../../_actions/userActions";

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

        {/* 레시피메인이미지사진 영역 */}
        <Link to={`/recipe/info/${recipe.id}`}><img src={recipe.main_image} alt='recipe' className='recipe-img' /></Link>

        {/* figure태그의 캡션 */}
        <div>
          <div className='recipe-info_box'>
            {/* 요리시간 */}
            <div className='time'>
              <i className='far fa-clock'></i> 요리시간 20min
            </div>

            {/* 삭제버튼과 수정버튼 영역 */}
            <div>
              <div className='recipe-dc-right_box'>
                <Link to={`/user/myrecipe/edit/${recipe.id}`}>
                  <i className='far fa-edit'></i>
                </Link>
                <i
                  className='far fa-trash-alt'
                  onClick={() => deleteHandler(recipe.id)}
                ></i>
              </div>
            </div>
          </div>

          {/* 레시피제목 */}
          <div className='title_box'>{recipe.title}</div>

          {/* 레시피 주재료들 */}
          <div className='recipe-ingre_box'>
            <div className='ingres'>
            {recipe.foods.slice(0, 3).map((food, idx) => {
              return <button key={idx}>#{food.name}</button>;
            })}
            </div>
          </div>
        </div>
      </Recipes>
    );
  });
};

const Recipes = styled.div`
  border: 1px solid #e6e8e6;

  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: inline-block;
  background-color: #ffffff;
  width: 95%;
  height: 315px;
  margin: 0;
  margin-bottom: 30px;

  img {
    width: 95%;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    margin: 10px 7px 0px 7px;
  }

  .recipe-info_box {
    display: flex;
    font-size: 12px;
    color: #a9a7a3;
    padding: 5px;
    margin-left: 10px;
    width: 100%;
    justify-content: space-between;
  }

  .fa-clock {
    color: gray;
    font-size: 12px;
  }

  .title_box {
    text-indent: 5px;
    margin-left: 15px;
    font-weight: 500;
  }

  .recipe-ingre_box {
    font-size: 14px;
    display: flex;

    margin: 10px 0px 15px 10px;
  }

  .ingre-label {
    text-indent: 10px;
    font-size: 13px;
  }

  .ingres {
    font-size: 11px;
    margin-left: 5px;
  }

  .ingres > button {
    padding: 3px 8px;
    background-color: #eaeaea;
    border-radius: 30px;
    margin-right: 5px;
  }

  .far {
    font-size: 20px;
    margin-right: 5px;
  }

  .fa-trash-alt {
    margin-top: 3px;
    cursor: pointer;
    color: black;
    margin-right: 30px;
  }

  .fa-clock {
    font-size: 12px;
    margin: 0;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
  }

  @media screen and (max-width: 375px) {
    width: 95%;
    height: 125px;
    display: flex;
    
    margin-bottom: 10px;

    img {
      width: 100px;
      height: 110px;
      border-radius: 20px;
      object-fit: cover;
      margin: 7px 2px 0px 7px;
    }

    .recipe-info_box {
      font-size: 9px;
      width: 100%;
      margin: 30px 0px 0px 0px;
    }

    .ingres > button {
      font-size: 10px;
      border: none;
      padding: 3px 5px;
      background-color: #eaeaea;
      border-radius: 30px;
      margin-right: 3px;
    }
    
    .fa-clock {
      font-size: 9px;
      margin: 0;
    }

    .fa-trash-alt {
      font-size: 14px;
    }

    .fa-edit {
      font-size: 14px;
    }

    .recipe-ingre_box {
      font-size: 14px;
      display: flex;
      margin: 10px 0px 5px 0px;
    }


    .title_box {
      text-indent: 5px;
      margin: 0;
    }

    .ingres {
      font-size: 4px;
    }
  }
`;

export default Card;
