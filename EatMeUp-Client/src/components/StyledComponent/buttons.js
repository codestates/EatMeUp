import styled from "styled-components";

/* button tag area */
export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "30px")} ;
  background-color: ${(props) => (props.fillColor ? props.fillColor : "black")};
  color: ${(props) => (props.color ? props.color : "black")};
  border-radius: 30px;
  border: none;
`;

export const XSmallBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => (props.fillColor ? props.fillColor : "black")};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const SmallBtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => (props.fillColor ? props.fillColor : "black")};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const MiddleBtn = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => (props.fillColor ? props.fillColor : "black")};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const LargeBtn = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => (props.fillColor ? props.fillColor : "black")};
  color: ${(props) => (props.color ? props.color : "black")};
`;

