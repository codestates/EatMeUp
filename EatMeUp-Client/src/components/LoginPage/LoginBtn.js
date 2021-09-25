import React, { useState } from "react";
import Login from "./Login";

const LoginBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Login</button>
      <Login isOpen={isModalOpen} close={closeModal} />
    </div>
  );
};

export default LoginBtn;
