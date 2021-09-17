import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { myRecipes } from '../dummydata'

const TitleArea = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 8px;
  border: 1px solid black;
`;

const PlanningPage = () => {
  console.log(myRecipes)
 const [openPopOver, setOpenPopOver] = useState(false)

 const openPopOverHandler = () => {
   setOpenPopOver(!openPopOver)
 }
  return (
    <div>
      <header
        style={{ width: "100%", height: "75px", border: "1px solid black" }}
      ></header>
      <section>
        <TitleArea></TitleArea>

        <div
          style={{
            width: "70%",
            margin: "0.5rem auto",
            border: "1px solid black",
            height: "50px",
          }}
        >
          <Link to='/user/myplanner'>
            <button>달력보러 가기</button>
          </Link>
        </div>
        <SectionArea>
          <RecommandRecipeArea>
            <div></div>

            <div>
              <RecipeCard>
                <i className='bx bx-add-to-queue' onClick={openPopOverHandler}></i>
               {openPopOver ? 
              <Balloon>
                <button>아침 추가</button>
                <button>점심 추가</button>
                <button>저녁 추가</button>
               </Balloon> : ""} 
              </RecipeCard>
            </div>
          </RecommandRecipeArea>

          <PlannerArea>
            <PlannerCard></PlannerCard>

            <PlannerCard></PlannerCard>

            <PlannerCard></PlannerCard>
          </PlannerArea>
        </SectionArea>
      </section>
    </div>
  );
};

const SectionArea = styled.div`
  width: 70%;
  border: 1px solid black;
  margin: 0.5rem auto;
  display: flex;
`;

const PlannerArea = styled.div`
  width: 75%;
  min-height: 200px;
  display: flex;

  span {
    padding: 15px;
  }
`;

const RecommandRecipeArea = styled.div`
  width: 230px;
  height: 700px;
  overflow-y: scroll;
`;

const PlannerCard = styled.div`
  width: 90%;
  min-height: 200px;
  border: 1px solid black;
  margin: 0.5rem;
`;

const RecipeCard = styled.div`
  width: 180px;
  height: 200px;
  margin: 5px auto;
  border: 1px solid black;
  position: relative;
  .bx-add-to-queue {
    font-size: 25px;
  }
`;

const Balloon = styled.div`
  position: relative;
  margin: 50px;
  width: 100px;
  height: 100px;
  background: white;
  border: 1px dashed black;
  border-radius: 10px;
  top: -70px;
  left: -14px;
  transition: 0.5s;

  &::after {
    border-top: 15px solid #333333;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 10px;
    left: -15px;
  }
`;

export default PlanningPage;
