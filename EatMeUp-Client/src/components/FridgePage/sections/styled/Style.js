import styled, { keyframes } from "styled-components";

const BackGroundModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 15px 15px;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  transition: opacity 0.15s linear;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const showDialog = keyframes`
   from {
    opacity: 0;
    transform: translateY(-200px);
   }
   to{
    opacity: 1;
    transform: translateY(0px);
   }
`;

const ModalDialog = styled.div`
  display: block;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  width: 380px;
  height: 380px;
  border-radius: 20px;
  max-width: calc(100% - 0.01px) !important;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 999999;
  opacity: 1;
  animation: ${showDialog} 0.5s forwards;

  .closeBtn {
    display: flex;
    justify-content: flex-end;
  }

  .fa-times {
    font-size: 25px;
    padding: 10px 15px 10px 10px;
    color: lightgrey;
    cursor: pointer;
  }

  .title {
    text-align: center;
  }
`;

const DropzoneArea = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodInfoBox = styled.div`
  width: 80%;
  padding: 8px;
  margin: 0.3rem auto;

  .foodname-box {
    margin: 0 auto;
    display: flex;
    margin-bottom: 10px;

    input {
      font-size: 23px;
      font-weight: 500;
    }
  }

  .foodlife-box {
    label {
      font-size: 17px;
      color: #a8a7a3;
      margin-left: 50px;
      font-weight: 500;
    }
  }

  input {
    border: none;
    margin: 5px auto;
    font-size: 17px;
    font-family: "Noto Sans KR", sans-serif;
    text-align: center;
    &:focus {
      outline: none;
      border-bottom: 1px solid black;
      transition: all 0.2s ease-in-out;
    }
  }

  .foodname-box > input {
    height: 30px;
    width: 177px;
  }

  .buydate-box {
    margin-bottom: 8px;
    font-size: 13px;
  }

  .buydate-box > input {
    width: 200px;
    height: 30px;
  }

  @media screen and (max-width: 375px) {
  
    .foodlife-box {
      label {
        font-size: 17px;
        color: #a8a7a3;
        margin-left: 20px;
        font-weight: 500;
      }
    }
  }
`;

const AddToRefriBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    font-size: 15px;
    margin: 0px 3px;
  }
`;

export {
  BackGroundModal,
  ModalDialog,
  DropzoneArea,
  FoodInfoBox,
  AddToRefriBtn,
};
