import React from "react";
import styled from "styled-components";
import theme from "../StyledComponent/theme";

const Footer = () => {
  return (
    <FooterBox>
      <div className='copyright'>
        Copyright <i class='far fa-copyright'></i> 2021 by{" "}
        <a href='https://github.com/codestates/EatMeUp'>
          <span className='eatmeup'>EatMeUp</span>
          <i className='fas fa-utensils fa-lg'></i>
        </a>
      </div>
      <div className='repo'></div>
      <div className='names'>
        <i className='fab fa-github fa-lg'></i>
        <a href='https://github.com/wookieOH'>wookieOH</a>
        <a href='https://github.com/KangJuO'>KangJuO</a>
        <a href='https://github.com/segyong56'>segyong56</a>
        <a href='https://github.com/5gazero'>5gazero</a>
      </div>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  background: #eaeaea;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 300;
  .copyright {
    margin: 5vw;
    i {
      margin: 3px;
    }
    a {
      padding: 0;
    }
  }

  .names {
    margin: 5vw;
    i {
      padding: 10px;
    }
  }

  a {
    padding: 10px 10px;
    cursor: pointer;
    text-decoration: none;
    :visited {
      color: ${theme.colors.black};
    }
  }

  .eatmeup {
    font-weight: 600;
  }

  .fa-github {
    font-size: 30px;
  }
`;

export default Footer;
