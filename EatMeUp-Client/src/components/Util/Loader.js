import React from "react";
import styled, { keyframes } from "styled-components";
const Loader = () => {
  return <Loading> </Loading>;
};
const showRoad = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Loading = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  width: 80px;
  height: 80px;
  padding-left: 0;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fa9c23;
    border-color: #fa9c23 transparent;
    animation: ${showRoad} 1.2s linear infinite;
  }
`;



export default Loader;
