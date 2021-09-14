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
  background: rgba(255, 255, 255);
  z-index: 999999;
  opacity: 1;
  animation: ${showDialog} 0.5s forwards;

  .closeBtn {
    display: flex;
    justify-content: flex-end;
    
  }

  .fa-times-circle {
    font-size: 25px;
    padding: 15px;
    cursor: pointer;
  }

  .title {
    text-align: center;
  }

  
`;

const DropzoneArea = styled.div`
  width: 250px;
  height: 150px;
  border: 1px dashed lightgray;
  margin: 1rem auto;
  margin-top: 20px;

`;

const FoodInfoBox = styled.div`
  width: 70%;
  padding: 8px;
  margin: 0.5rem auto;

  .foodname-box {
    margin-bottom: 8px;
  }

  .buydate-box {
    margin-bottom: 8px;
  }
`

const AddToRefriBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export { BackGroundModal, ModalDialog, DropzoneArea, FoodInfoBox, AddToRefriBtn };