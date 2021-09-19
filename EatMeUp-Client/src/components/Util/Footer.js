import React from "react";
import styled from "styled-components";
import theme from "../StyledComponent/theme";

const Footer = () => {
  return (
    <FooterBox>
      <div className='copyright'>
        Copyright <i class='far fa-copyright'></i> 2021 by <span className="eatmeup">EatMeUp</span>
    </div>
      <div className='names'>
        <span>오동욱</span>
        <span>강주오</span>
        <span>이세경</span>
        <span>오가영</span>
      </div>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  background: #eaeaea;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.darkgray};
  
  .copyright {
    margin: 20px;
  }

  .names {
    margin: 20px;
  }

  .names > span {
    padding: 10px 10px;
  }

  .eatmeup {
    font-weight: bold;
  }
`;

export default Footer;
