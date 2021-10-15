import styled from 'styled-components'
import { LargeBtn } from "../../StyledComponent/buttons";
import { SectionBox } from "../../StyledComponent/containers";
import theme from "../../StyledComponent/theme";

const BtnContainer = styled.div`
width: 100%;
height: 100px;
margin: 10px auto;
display: flex;
align-items: center;
justify-content: center;

input {
  width: 200px;
  height: 40px;
  cursor: pointer;
  background-color: ${theme.colors.yellow};
  border-radius: 10px;
  color: white;
  border: none;
  font-size: 15px;
  font-weight: 500;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
}
`;

const TitleBox = styled.div`
width: 100%;
height: 90px;
font-weight: bold;
font-size: 30px;
line-height: 100px;
text-indent: 30px;
display: flex;
justify-content: space-between;
margin: 0 auto;

@media screen and (max-width: 1500px) {
  width: 100%;
}
@media screen and (max-width: 775px) {
  display: block;
  font-size: 25px;
  text-indent: 20px;
}
@media screen and (max-width: 375px) {
  display: block;
  font-size: 25px;
  text-indent: 20px;
}
`;

const MainDCBox = styled(SectionBox)`
width: 100%;
margin: 10px auto;
padding: 10px 0px;

.subtitle {
  text-indent: 20px;
  padding-top: 20px;
  font-size: 20px;
  font-weight: 500;
}

@media screen and (max-width: 1500px) {
  width: 100%;
}
@media screen and (max-width: 775px) {
  display: block;
}
@media screen and (max-width: 375px) {
  display: block;
}
`;

const StepsBox = styled(SectionBox)`
width: 100%;
margin: 18px auto;

.subtitle {
  text-indent: 20px;
  padding-top: 20px;
  font-size: 20px;
  font-weight: 500;
}

@media screen and (max-width: 1500px) {
  width: 100%;
}
`;

const AddBtn = styled(LargeBtn)`
cursor: pointer;
background-color: ${theme.colors.yellow};
border-radius: 10px;
color: white;
font-size: 15px;
font-weight: 500;
&:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
`;

/* description title box css */
const DescriptionBox = styled.div`
width: 80%;
border: 2px dashed lightgrey;
margin: auto;
margin-bottom: 20px;
display: flex;

@media screen and (max-width: 775px) {
  display: flex;
  flex-direction: column-reverse;
}

@media screen and (max-width: 375px) {
  width: 95%;
  display: flex;
  flex-direction: column-reverse;
}
`;

const ImageArea = styled.div`
width: 40%;
position: relative;
margin: 0px 20px 10px 0px;
label {
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 0px;
  font-size: 45px;
  z-index: 999;
  padding: 0 20px;
  cursor: pointer;
  color: grey;
}

input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

div {
  margin-top: 20px;
}

.input {
  width: 100%;
}
@media screen and (max-width: 775px) {
  width: 95%;
  label {
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 0px;
    font-size: 45px;
    z-index: 999;
    padding: 0 20px;
    cursor: pointer;
  }

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  div {
    margin-top: 10px;
  }
}
@media screen and (max-width: 375px) {
  width: 95%;
  margin: 5px auto;
  label {
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 0px;
    font-size: 45px;
    z-index: 999;
    padding: 0 20px;
    cursor: pointer;
  }

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  div {
    margin: 0;
  }
}
`;
const ImageBox = styled.div`
width: 100%;
height: 92%;
border: 2px solid lightgrey;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
color: grey;
cursor: pointer;

img {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
@media screen and (max-width: 775px) {
  margin-left: 6px;
  height: 230px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}

@media screen and (max-width: 375px) {
  height: 230px;
  margin-left: 6px;

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 10px;
  }
}
`;

const DCBox = styled.div`
width: 70%;
height: 90%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.description {
  margin: 10px 0px;
}
label {
  font-weight: bold;
}
div {
  width: 90%;
}

input {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 2px solid lightgrey;
  text-indent: 5px;
}

textarea {
  width: 100%;
  min-height: 220px;
  border-radius: 10px;
  border: 2px solid lightgrey;
  text-indent: 5px;
}
span {
  margin: 5px;
}

p {
  color: #bf1650;
  font-size: 12px;
  line-height: 0.1;
}

p::before {
  display: inline;
  content: "⚠ ";
}
@media screen and (max-width: 775px) {
  display: block;
  width: 95%;
  margin: 5px auto;

  div {
    width: 95%;
  }
}
@media screen and (max-width: 375px) {
  display: block;
  width: 95%;
  margin: 5px auto;

  div {
    width: 95%;
  }
}
`;

/* cooking info */
const CookInfomation = styled.div`
width: 80%;
display: flex;
margin: 10px auto;

.cookinfo {
  margin-left: 10px;
  line-height: 35px;
  color: grey;
}

@media screen and (max-width: 775px) {
  display: block;
  width: 95%;
  margin: 8px auto;
  position: relative;
}
@media screen and (max-width: 375px) {
  display: block;
  width: 95%;
  margin: 8px auto;
  position: relative;
}
`;

const Selector = styled.select`
width: 200px;
height: 40px;
font-size: 15px;
border-radius: 10px;
text-indent: 10px;
margin-left: 10px;
outline: none;
border: 2px solid lightgrey;
@media screen and (max-width: 375px) {
  
  width: 80%;
  margin: 5px auto;
}
`;

/* add ingredient */
const AddIngredientBox = styled.div`
width: 80%;
min-height: 150px;
margin: 10px auto;
.cookinfo {
  margin-left: 10px;
  color: grey;
}

@media screen and (max-width: 775px) {
  display: block;
  width: 95%;
  margin: 8px auto;
  position: relative;
}

@media screen and (max-width: 375px) {
  display: block;
  width: 95%;
  margin: 8px auto;
  position: relative;
}
`;

const FlexContainer = styled.div`
width: 80%;
height: auto;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 10px 0px;

input {
  width: 200px;
  height: 40px;
  margin-right: 8px;
  border-radius: 10px;
  border: 2px solid lightgrey;
  text-indent: 5px;
}

input:focus {
  outline: none;
}

@media screen and (max-width: 775px) {
  display: block;
  width: 95%;
  margin: 8px auto;
  position: relative;

  input {
    margin-top: 6px;
  }
}
@media screen and (max-width: 375px) {
  display: block;
  width: 95%;
  margin: 8px auto;
  position: relative;

  input {
    margin-top: 6px;
  }
}
`;

const TagContainer = styled.div`
width: 900px;
overflow-x: scroll;
height: 50px;
border-radius: 10px;
padding: 8px 4px;
@media screen and (max-width: 775px) {
  width: 260px;
}
@media screen and (max-width: 375px) {
  width: 300px;
}
`;

/* add steps */

const AddRecipeArea = styled.div`
width: 100%;
min-height: 300px;
`;

const AddRecipeBox = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 15px;

.steps {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  text-indent: 30px;
}

.cook-recipe_box {
  width: 100%;
  margin: 0 auto;
  border: 2px dashed lightgrey;
  min-height: 230px;
  display: flex;
}

.recipeImg_box {
  width: 30%;
  height: 250px;
  border: 2px solid lightgrey;
  margin: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: gray;
  cursor: pointer;
  position: relative;

  label {
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 45px;
    z-index: 999;
    padding: 0 20px;
    cursor: pointer;
  }

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
}

.bx-image-add {
  color: grey;
}

.recipe-dc_box {
  width: 60%;
  height: 90%;
  margin: 10px;
  border-radius: 20px;
}

.recipe-dc_box > textarea {
  width: 100%;
  height: 240px;
  border-radius: 10px;
  border: 2px solid lightgrey;
  text-indent: 10px;
  font-size: 14px;
}

.fa-times {
  font-size: 30px;
  padding: 10px;
  color: gray;
  cursor: pointer;
}

p {
  color: #bf1650;
  font-size: 12px;
  line-height: 0.1;
}

p::before {
  display: inline;
  content: "⚠ ";
}

}

@media screen and (max-width: 775px) {
  display: block;
  width: 95%;
  margin: 5px auto;
  position: relative;

  div {
    width: 95%;
  }

  .cook-recipe_box {
    display: block;
  }

  .recipe-dc_box {
    width: 90%;

  }

  .recipeImg_box {
    width: 90%;
  }

  .fa-times {
    position: absolute;
    top: 30px;
    z-index: 99999;
  }

}

@media screen and (max-width: 375px) {
  display: block;
  width: 95%;
  margin: 5px auto;
  position: relative;

  div {
    width: 95%;
  }

  .cook-recipe_box {
    display: block;
  }

  .recipe-dc_box {
    width: 90%;

  }

  .recipeImg_box {
    width: 90%;
  }

  .fa-times {
    position: absolute;
    top: 30px;
    left: 290px;
    z-index: 99999;
  }

}
`;

const BtnArea = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 10px auto;
`;

const PlusBtn = styled.div`
width: 50px;
font-size: 40px;
color: grey;
cursor: pointer;
`;


export {
  BtnContainer,
  TitleBox,
  MainDCBox,
  StepsBox,
  AddBtn,
  DescriptionBox,
  ImageArea,
  ImageBox,
  DCBox,
  CookInfomation,
  Selector,
  AddIngredientBox,
  FlexContainer,
  TagContainer,
  AddRecipeArea,
  AddRecipeBox,
  BtnArea,
  PlusBtn
};
