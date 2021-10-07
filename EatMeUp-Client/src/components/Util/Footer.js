import React from "react";
import styled from "styled-components";
import theme from "../StyledComponent/theme";

const Footer = () => {
  return (
    <FooterBox>
      <div>
        <div className='right'>
          <div className='contact-infos'>TOUCH IN US</div>
          <div className='contact'>
            <i className='fas fa-phone'></i>
            <span className='contact-info'>02) 1234.5678</span>
          </div>
          <div className='contact'>
            <i className='fas fa-envelope'></i>
            <span className='contact-info'>eatmeup@gmail.com</span>
          </div>
          <div className='contact'>
            <i className='fas fa-map-marker-alt'></i>
            <span className='contact-info'>서울특별시 강동구 성내2길 123</span>
          </div>
          <div className='company'>
            (주) EatMeUp | 공동대표: 오동욱 강주오 이세경 오가영 
          </div>
        </div>

        <div className='names'>
          <i className='fab fa-github fa-lg'></i>
          <a href='https://github.com/wookieOH'>wookieOH</a>
          <a href='https://github.com/KangJuO'>KangJuO</a>
          <a href='https://github.com/segyong56'>segyong56</a>
          <a href='https://github.com/5gazero'>5gazero</a>
        </div>
      </div>
      <div className='copyright-box'>
        <div className='copyright'>
          Copyright <i className='far fa-copyright'></i> 2021 by{" "}
          <a href='https://github.com/codestates/EatMeUp'>
            <span className='eatmeup'>EatMeUp</span>
            <i className='fas fa-utensils fa-lg'></i>
          </a>
        </div>
      </div>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  background: #EDEBE6;
  width: 100%;

  font-size: 14px;
  font-weight: 300;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .company {
    font-weight: 500;
    font-size: 14px;
    margin-top: 5px;
  }

  .contact-infos {
    font-size: 20px;
    font-weight: bold;
  }

  .contact {
    margin-top: 5px;
  }

  .contact-info {
    margin-left: 5px;
  }

  .copyright-box {
    /* justify-content: center; */
    width: 100%;
    height: 50px;
    background-color: #E4E1DA;
  }

  .copyright {
    font-weight: 400;
    /* text-align: center; */
    margin: 0 auto;
    i {
      margin: 3px;
    }
    a {
      padding: 0;
      text-decoration: none;
      :visited {
        color: ${theme.colors.black};
        text-decoration: none;
      }
    }
  }

  .right {
    margin: 3vw 5vw;
  }

  .names {
    margin: 3vw 5vw;
    font-weight: 400;
    color: ${theme.colors.darkgrey};
    i {
      padding: 10px;
      vertical-align: middle;
    }
    a {
      color: ${theme.colors.darkgrey};
      padding: 10px 10px;
      cursor: pointer;
      text-decoration: none;
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
