import React from "react";
import styled from "styled-components";
/* styled-component */
import Figure from "../../StyledComponent/Figure";
import Image from "../../StyledComponent/Image";

/* styled-component */
const TitleCaption = styled.figcaption`
  margin-top: 4px;
  height: auto;
  font-size: 20px;
  text-indent: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid black;
`;

const Card = ({ image }) => {
  return (
    <>
      <Figure>
        <Image src={image} alt='food1' />
        <TitleCaption>title</TitleCaption>
      </Figure>
    </>
  );
};

export default Card;
