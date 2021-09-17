import React from "react";
import styled from "styled-components";

const DescriptionArea = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid black;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  width: 45%;
  height: 90%;
  border: 1px solid black;
  margin: 8px;
`;
const DCBox = styled.div`
  width: 45%;
  height: 90%;
  border: 1px solid black;
  margin: 8px;
`;

const Description = () => {
  return (
    <DescriptionArea>
      <DCBox>
        <div>
          <input type='text' placeholder='음식 제목을 입력해 주세요.' />
        </div>
        <div>
          <textarea placeholder='음식에 대한 설명을 입력해 주세요.'></textarea>
        </div>
      </DCBox>
      <ImageBox></ImageBox>
    </DescriptionArea>
  );
};

export default Description;
