import styled from "styled-components";
const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  width: 250px;
  height: 35px;
  margin: 4px;
`;

export default Input;
