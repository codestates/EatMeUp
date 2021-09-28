import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { XSmallBtn } from "../StyledComponent/buttons";
import theme from "../StyledComponent/theme";

const Header = ({ id }) => {
  const menu = [
    { menu: "모든 레시피", link: "/recipes" },
    { menu: "마이 냉장고", link: "/fridge" },
    { menu: "마이 페이지", link: "/user/mypage" },
    { menu: "로그아웃", link: "/logout" },
  ];
  const [currentIdx, setCurrentIdx] = useState(id);

  const logoutHandler = (e) => {
    e.preventDefault();
  };

  const tabHandler = (idx) => {
    setCurrentIdx(idx);
  };

  return (
    <EatMeUpHeader>
      <LogoContainer>
        <Link to='/'>
          <img src='../../food_img/EatMeUp.png' alt='logo' />
        </Link>
      </LogoContainer>
      <RightMemu>
        {menu.map((item, idx) => {
          return (
            <Link to={item.link} key={idx}>
              <MenuButton
                onClick={() => {
                  tabHandler(idx);
                }}
                fillColor={currentIdx === idx ? theme.colors.yellow : "white"}
                color={currentIdx === idx ? "white" : theme.colors.black}
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
  margin-right: 5vw;
`;

const MenuButton = styled(XSmallBtn)`
  width: 120px;
  height: 50px;
  margin-left: 5px;
  transition: 0.3s;
  border-radius: 30px;
  border: none;
  font-family: Noto Sans KR;
  font-size: 17px;
  font-weight: 400;
  &:hover {
    background-color: ${theme.colors.yellow};
    cursor: pointer;
  }
`;

const EatMeUpHeader = styled.div`
  width: 100%;
  height: 12vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 180px;
  height: 80%;
  margin-left: 5vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export default Header;
