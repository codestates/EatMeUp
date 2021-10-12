import React from "react";
import styled from "styled-components";

function ScrollDown() {
  return <Scroll />;
}

const Scroll = styled.div`
  z-index: 11;
  position: fixed;
  width: 42px;
  height: 64px;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0px;
  border: 2px solid white;
  border-radius: 50px;
  ::before {
    content: "";
    position: absolute;
    top: 20%;
    left: 50%;
    border: 2px solid white;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: MoveArrow 1s ease-in-out infinite;
  }
  ::after {
    top: 30%;
    animation-delay: .3s;
  }
  @keyframes MoveArrow {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: 90%;
    }
  }
`;

export default ScrollDown;
