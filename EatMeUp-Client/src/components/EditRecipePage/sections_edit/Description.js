import React from "react";
import styled from "styled-components";
import Dropzone from 'react-dropzone';

import theme from "../../StyledComponent/theme";

const Description = () => {

  const dropHandler = () => {}
  return (
    
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
        <Dropzone onDrop={dropHandler} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <ImageBox {...getRootProps()}>
            <input {...getInputProps()} />

            <div>
              <i class='far fa-image'></i>
            </div>
          </ImageBox>
        )}
      </Dropzone>
      </DescriptionBox>
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
  border: 2px solid ${theme.colors.lightgrey};
  border-radius: 20px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: ${theme.colors.gray};
  cursor: pointer;

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
    border: 2px solid ${theme.colors.lightgrey};
    text-indent: 5px;
  }

  textarea {
    width: 100%;
    min-height: 160px;
    margin-top: 10px;
    border-radius: 10px;
    border: 2px solid ${theme.colors.lightgrey};
    text-indent: 5px;
  }
  span {
    margin: 5px;
  }
`;

export default Description;
