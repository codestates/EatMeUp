import styled from 'styled-components'
import theme from '../StyledComponent/theme'
import { SectionBox } from '../StyledComponent/containers'

const ListContainer = styled(SectionBox)`
  width: 77%;
  min-height: 720px;

  @media screen and (max-width: 1035px) {
    width: 88%;
    margin: 7% 0 1% 0;
  }
  @media screen and (max-width: 375px) {
    width: 95%;
    margin: auto;
    margin: 70px 7px;
  }
`;

const TitleBox = styled.div`
width: 100%;
height: 90px;
font-weight: bold;
font-size: 30px;
text-indent: 30px;
line-height: 90px;
display: flex;
justify-content: space-between;
margin: 5px 20px 10px 20px;
padding: 10px;

@media screen and (max-width: 375px) {
  display: block;
  font-size: 23px;
  text-indent: 10px;
  margin: 0;
}
`;

const ListBox = styled.div`
width: 95%;
max-width: 1329px;
margin: 0 auto;
min-height: 720px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 15px;
padding: 10px;

@media screen and (max-width: 1500px) {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  padding: 10px;
}

@media screen and (max-width: 1200px) {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  padding: 10px;
}

@media screen and (max-width: 1034px) {
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 10px;
}

@media screen and (max-width: 550px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 375px) {
  display: block;
}
`;


const Recipes = styled.div`
  border: 1px solid #e6e8e6;

  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: inline-block;
  background-color: #ffffff;
  width: 95%;
  height: 308px;
  margin: 0;

  img {
    width: 93%;
    height: 200px;
    border-radius: 30px;
    object-fit: cover;
    margin: 11.5px 11.5px 0px 11.5px;
  }

  .recipe-info_box {
    display: flex;
    font-size: 13px;
    color: #a9a7a3;
    margin-left: 20px;
    width: 100%;
    justify-content: space-between;
  }

  .title_box {
    text-indent: 5px;
    margin-left: 15px;
    font-weight: 500;
    font-size: 18px;
  }

  .recipe-ingre_box {
    font-size: 14px;
    display: flex;
    margin: 5px 0px 5px 10px;
  }

  .ingre-label {
    text-indent: 10px;
    font-size: 13px;
  }

  .ingres {
    margin-left: 5px;
    margin-left: 5px;
  }

  .ingres > button {
    padding: 3px 8px;
    border: none;
    color: #404040;
    background-color: #eaeaea;
    border-radius: 30px;
    margin-right: 5px;
  }

  .far {
    font-size: 20px;
    margin-right: 5px;
  }

  .fa-trash-alt {
    margin-top: 3px;
    cursor: pointer;
    color: black;
    margin-right: 30px;
  }

  .fa-clock {
    font-size: 13px;
    margin-right: 5px;
  }

  .fa-heart {
    color: ${theme.colors.red};
    font-size: 20px;
    margin-right: 5px;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
  }

  @media screen and (max-width: 375px) {
    width: 95%;
    height: 125px;
    display: flex;
    margin: auto;
    margin-bottom: 10px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin: 13px 5px 7px 10px;
    }

    .recipe-info_box {
      font-size: 13px;
      width: 100%;
      margin: 30px 0px 0px 5px;
    }

    .ingres > button {
      font-size: 10px;
      border: none;
      padding: 3px 5px;
      background-color: #eaeaea;
      border-radius: 30px;
      margin-right: 3px;
    }

    .fa-clock {
      font-size: 14px;
      margin: 0;
    }

    .fa-trash-alt {
      font-size: 16px;
    }

    .fa-edit {
      font-size: 16px;
    }

    .recipe-ingre_box {
      font-size: 14px;
      display: flex;
      margin: 10px 0px 5px 0px;
    }

    .title_box {
      text-indent: 5px;
      margin: 0;
    }

    .ingres {
      font-size: 4px;
    }
  }
`;
export {
  TitleBox,
  ListBox,
  Recipes,
  ListContainer
}