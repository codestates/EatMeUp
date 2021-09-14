import React from "react";
import styled from "styled-components";

const StorageHeader = styled.div`
  border: 1px solid black;
  min-height: 65px;
  border-radius: 8px;
  
`;

const StorageName = styled.div`
  width: 30%;
  margin: 5px;
 
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;
const FilterBtnArea = styled.div`
  width: 65%;
  margin: 5px;
 
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const FilterBtn = styled.button`
  width: 30%;
  height: 35px;
  margin: 9px 5px 5px 0px;
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
`;

const RefrigeHeader = ({ data }) => {
  return data.map((item, idx) => {
    return (
      <StorageHeader key={idx}>
        <StorageName>실온보관</StorageName>
        <FilterBtnArea>
          <FilterBtn>신선</FilterBtn>
          <FilterBtn>보통</FilterBtn>
          <FilterBtn>위험</FilterBtn>
        </FilterBtnArea>
      </StorageHeader>
    );
  });
};

export default RefrigeHeader;
