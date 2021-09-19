import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RecipeCard } from "../../StyledComponent/card";

const Card = ({ recipes }) => {
  return recipes.map((recipe, idx) => {
    return (
      <Cards width="90%" key={idx}>
        <div className='recipe-card-tag'>Medium</div>
        <div className='recipe-img_box'>
          <img
            src={`${recipe.main_image}`}
            alt='recipe'
            className='recipe-img'
          />
        </div>
        <div className='recipe-dc_box'>
          <div className='recipe-dc-left_box'>
            <div className='recipe-title_box'>{recipe.title}</div>
            <div className='recipe-ingre_box'>
              <div className='recipe-ingre-label'>
                <span>주재료</span>
              </div>
              <div className='recipe-ingres'>
                <span>돼지전지</span>
                <span>양파</span>
                <span>대파</span>
              </div>
            </div>
          </div>
          <div className='recipe-dc-right_box'>
            <Link to='/user/myrecipe/edit'>
              <i class='far fa-edit'></i>
            </Link>
            <i class='far fa-trash-alt'></i>
          </div>
        </div>
      </Cards>
    );
  });
};

const Cards = styled(RecipeCard)`
  
  display: inline-block;
  margin: 0.5rem auto;

  .far {
    font-size: 20px;
    margin-right: 10px;
  }

  .fa-trash-alt {
    margin-top: 3px;
  }
`;

export default Card;
