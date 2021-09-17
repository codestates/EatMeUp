import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <EatMeUpHeader>
      <LogoContainer>
        <img src='../food_img/EatMeUp.png' alt='logo' />
      </LogoContainer>
    </EatMeUpHeader>
  )
}

const EatMeUpHeader = styled.div`
 
  width: 100%;
  height: 100px;
  background-color: white;

`;

const LogoContainer = styled.div`
  width: 180px;
  height: 80%;
  margin-left: 30px;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 15px;
  }
`;
export default Header
