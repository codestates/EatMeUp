import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "../StyledComponent/buttons";
import theme from "../StyledComponent/theme";

const Sidebar = () => {
  return (
    <Container>
      <Link to='#'>
        <div>
          <SidebarBtn width='200px' height='48px' fillColor={theme.colors.yellow}>
            Home
          </SidebarBtn>
        </div>
      </Link>
      <Link to='/user/myrecipe'>
        <div>
          <SidebarBtn width='200px' height='48px' fillColor={theme.colors.yellow}>
            My Recipes
          </SidebarBtn>
        </div>
      </Link>
      <Link to='/user/likelist'>
        <div>
          <SidebarBtn width='200px' height='48px' fillColor={theme.colors.yellow}>
            Liked Recipes
          </SidebarBtn>
        </div>
      </Link>
      <Link to='/user/myplanner'>
        <div>
          <SidebarBtn width='200px' height='48px' fillColor={theme.colors.yellow}>
            Meal Planner
          </SidebarBtn>
        </div>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  width: 200px;
  margin-right: 20px;
`;

const SidebarBtn = styled(Button)`
  box-shadow: 2px 2px 8px rgba(254, 189, 47, 0.4);
  border-radius: 28px;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;
export default Sidebar;
