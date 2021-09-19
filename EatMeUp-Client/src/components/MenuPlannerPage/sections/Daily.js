import React from "react";
import { BackGroundModal, ModalDialog } from "../../FreezerMainPage/sections/styled/Style";


const Daily = ({ setOpenDaily }) => {
  /* function area */
  const closeModalHandler = () => {
    setOpenDaily(false)
  }

  return (
    <>
      <BackGroundModal>
        <ModalDialog onClick={closeModalHandler}>
         
        </ModalDialog>
      </BackGroundModal>
    </> 
  );
};

export default Daily;
