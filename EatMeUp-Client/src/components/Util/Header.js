import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { XSmallBtn } from "../StyledComponent/buttons";
import theme from "../StyledComponent/theme";
const Header = ({ id }) => {
  const menu = [
    { menu: "모든 레시피", link: "/recipes" },
    { menu: "마이 냉장고", link: "/fridge" },
    { menu: "마이 페이지", link: "/user/myrecipe" },
  ];
  const [currentIdx, setCurrentIdx] = useState(id);

  const tabHandler = (idx) => {
    setCurrentIdx(idx);
  };
  return (
    <EatMeUpHeader>
      <LogoContainer>
        <img src='../../food_img/EatMeUp.png' alt='logo' />
      </LogoContainer>
      <RightMemu>
        {menu.map((item, idx) => {
          return (
            <Link to={item.link}>
             
              <MenuButton
                onClick={() => {
                  tabHandler(idx);
                }}
                fillColor={currentIdx === idx ? theme.colors.yellow : "white"}
              >
                {item.menu}
              </MenuButton>
            </Link>
          );
        })}
      </RightMemu>
    </EatMeUpHeader>
  );
};

const RightMemu = styled.div`
 
  border-radius: 30px;
  padding: 10px 15px;
  margin-right: 20px;
`;

const MenuButton = styled(XSmallBtn)`
  width: 100px;
  height: 35px;
  margin-left: 15px;
  transition: 0.3s;
  border-radius: 30px;
  border: none;

  &:hover {
    background-color: ${theme.colors.yellow}
  }
`;

const EatMeUpHeader = styled.div`
  width: 100%;
  height: 130px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 80%;
  margin-left: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export default Header;
