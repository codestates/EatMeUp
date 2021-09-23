import React from "react";
import Header from "../Util/Header"
import Sidebar from "../Util/Sidebar";
import Footer from "../Util/Footer"

const MyPage = () => {
  return (
    <div>
      <Header id={2}/>
      <Sidebar id={0}/>
      <Footer />
    </div>
  );
};

export default MyPage;
