import React from "react";
import Header from "../Util/Header"
import Sidebar from "../Util/Sidebar";
import Footer from "../Util/Footer"

const MyInfo = () => {
  return (
    <div>
      <Header id={2}/>
      <Sidebar id={4}/>
      <Footer />
    </div>
  );
};

export default MyInfo;
