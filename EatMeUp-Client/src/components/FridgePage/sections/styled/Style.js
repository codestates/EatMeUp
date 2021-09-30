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
  width: 400px;
  height: 500px;
  border-radius: 20px;
  border: 2px solid gray;
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
    padding: 15px;
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
  background-color: #eaeaea;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .bxs-camera-plus {
    font-size: 30px;
    color: grey;
  }
`;

const FoodInfoBox = styled.div`
  width: 70%;
  padding: 8px;
  margin: 0.5rem auto;
  font-size: 13px;

  .foodname-box {
    margin-bottom: 8px;
    font-size: 13px
  }

  .foodname-box > input {
    height: 30px;
    width: 177px;
  }

  .buydate-box {
    margin-bottom: 8px;
    font-size: 13px
  }

  .buydate-box > input {
    width: 177px;
    height: 30px;
  }
`;

const AddToRefriBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
`;

export {
  BackGroundModal,
  ModalDialog,
  DropzoneArea,
  FoodInfoBox,
  AddToRefriBtn,
};
