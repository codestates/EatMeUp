import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { XSmallBtn } from "../StyledComponent/buttons";
import theme from "../StyledComponent/theme";

const Sidebar = ({ id }) => {
  const menu = [
    { menu: "My Page", link: "/user/mypage", icon: "fas fa-home" },
    { menu: "My Recipes", link: "/user/myrecipe", icon: "fas fa-utensils" },
    { menu: "Liked Recipes", link: "/user/likelist", icon: "fas fa-heart" },
    {
      menu: "Meal Planner",
      link: "/user/myplanner",
      icon: "far fa-calendar-alt",
    },
    { menu: "MyInfo", link: "/user/info", icon: "fas fa-user" },
  ];

  const [currentId, setcurrentId] = useState(id);

  const menuHandler = (idx) => {
    setcurrentId(idx);
  };

  return (
    <div>
      <SideMenu>
        {menu.map((item, idx) => {
          return (
            <Link to={item.link} key={idx}>
              <MenuBtn
                onClick={() => {
                  menuHandler(idx);
                }}
                fillColor={
                  currentId === idx
                    ? theme.colors.yellow
                    : theme.colors.background
                }
                color={currentId === idx ? "white" : theme.colors.black}
              >
                <div className='point'>
                  <i className={item.icon} id='icon'></i>
                </div>
                <div className='menu'>{item.menu}</div>
              </MenuBtn>
            </Link>
          );
        })}
      </SideMenu>
    </div>
  );
};

const SideMenu = styled.div`
  display: block;
  width: 200px;
  border-radius: 30px;
  align-items: left;
  margin: 0 2vw 0 4vw;
    
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1023px) {
    margin: 0 2vw 0 4vw;
    width: 65px;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 99999;
    bottom: 10px;
    width: 100%;
    height: 60px;
    background: ${theme.colors.yellow};
    border-radius: 30px;
  }
`;

const MenuBtn = styled(XSmallBtn)`
  width: 170px;
  height: 50px;
  display: flex;
  align-items: center;
  border: solid 1px ${theme.colors.lightgrey};
  margin: 0 0 15px 15px;
  font-family: "Noto Sans KR";
  font-weight: 500;

  &:hover {
    background-color: ${theme.colors.yellow};
    cursor: pointer;
    color: white;
  }

  .point {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    margin-left: 3px;

    i {
      margin: 9px 7px 9px 7px;
      color: black;
      font-size: 17px;
    }
  }

  .menu {
    margin-left: 10px;
    font-size: 14px;
    line-height: 8px;
  }

  @media screen and (max-width: 1023px) {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    border: none;
    .menu {
      display: none;
    }
    .point {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      margin: 0;
      i {
        margin: 8px 3px;
        color: black;
        font-size: 15px;
      }
    }
  }


  @media screen and (max-width: 375px) {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    /* margin: 0px 0xp 8px 0px; */
    margin: 5px 10px;
    background-color: ${theme.colors.yellow};

    .menu {
      display: none;
    }

    .point {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      
      i {
        margin: 11px 10px;
        color: black;
        font-size: 20px;
      }
    }
  }
`;

export default Sidebar;
