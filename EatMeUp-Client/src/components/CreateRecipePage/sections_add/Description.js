import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../StyledComponent/theme";

const Description = () => {
  return (
    <ThemeProvider theme={theme}>
      <DescriptionBox>
        <DCBox>
          <div>
            <span>레시피 이름</span>
            <input type='text' placeholder='음식 제목을 입력해 주세요.' />
          </div>
          <div>
            <textarea placeholder='음식에 대한 설명을 입력해 주세요.'></textarea>
          </div>
        </DCBox>
        <ImageBox>
          <i class='far fa-image'></i>
        </ImageBox>
      </DescriptionBox>
    </ThemeProvider>
  );
};

const DescriptionBox = styled.div`
  width: 90%;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  width: 45%;
  height: 85%;
  border: 1px solid ${theme.colors.lightgrey};
  border-radius: 20px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${theme.colors.gray};
`;
const DCBox = styled.div`
  width: 50%;
  height: 90%;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 90%;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.lightgrey};
    text-indent: 5px;
  }

  textarea {
    width: 100%;
    min-height: 160px;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.lightgrey};
    text-indent: 5px;
  }
  span {
    margin: 5px;
  }
`;

export default Description;
