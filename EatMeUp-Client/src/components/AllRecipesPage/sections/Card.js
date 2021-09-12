import React from "react";
import styled from "styled-components";
/* styled-component */
import Figure from "../../StyledComponent/Figure";
import Image from "../../StyledComponent/Image";

/* styled-component */
const TitleCaption = styled.figcaption`
  height: 50px;
  font-size: 20px;
  text-indent: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  border-radius: 0px 0px 10px 10px;
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
