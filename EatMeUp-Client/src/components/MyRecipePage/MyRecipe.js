import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { myRecipes } from "../dummydata";
import Card from "./sections/Card";
import Header from "../Util/Header";
import { LargeBtn } from "../StyledComponent/buttons";
import theme from "../StyledComponent/theme";


const MyRecipe = () => {
  return (
    <>
      <Header id={2} />
      <section>
        <ContentBox>
          <Sidebar>Home</Sidebar>
          <ListContainer>
            <TitleBox>
              <div className='title'>My Recipes</div>
              <div>
                <Link to="/user/myrecipe/create"><Button fillColor={theme.colors.yellow}>
                  레시피 만들기 <i class="fas fa-play"></i>
                </Button></Link>
              </div>
            </TitleBox>
            <ListBox>
              <Card recipes={myRecipes} />
            </ListBox>
          </ListContainer>
        </ContentBox>
      </section>
    </>
  );
};

const ContentBox = styled.div`
  width: 90%;
  margin: 0.5rem auto;
  display: flex;
  margin-top:50px;
`;
const Sidebar = styled.div`
  width: 200px;
  height: 48px;
  background: #febd2f;
  box-shadow: 2px 2px 8px rgba(254, 189, 47, 0.4);
  border-radius: 28px;
  text-align: center;
  font-weight: bold;
  line-height: 46px;
  margin-right: 20px;

`;

const ListContainer = styled.div`
  width: 100%;
  min-height: 720px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

`;

const TitleBox = styled.div`
  width: 100%;
  height: 90px;
  font-weight: bold;
  font-size: 30px;
  text-indent: 30px;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled(LargeBtn)`
  margin-right: 20px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  &:hover {
    color: white;
  }
`;

const ListBox = styled.div`
  width: 100%;
  min-height: 720px;
  display: grid;
  grid-template-columns : 1fr 1fr 1fr;
  grid-gap: 0;
`;

export default MyRecipe;
