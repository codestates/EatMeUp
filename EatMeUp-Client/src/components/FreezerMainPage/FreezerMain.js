import React, { useState } from "react";
import styled from "styled-components";

/* import components */
import RefrigeInner from "./sections/RefrigeInner";
import SideBar from "../Util/Sidebar";
import Footer from "../Util/Footer";
import PlusBtn from "./sections/PlusBtn";
import RefrigeHeader from "./sections/RefrigeHeader";

/* style component */
const RecommandBtnContainer = styled.div`
  width: 70%;
  height: 70px;
  border: 1px solid black;
  margin: 0.5rem auto;
`;
const Refrigerator = styled.div`
  width: 70%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0.5rem auto;
  grid-gap: 8px;
`;

const FreezerMain = () => {
  const data = [
    { group: 0, item: ["cheese.jpeg", "apple.jpeg"] },
    { group: 1, item: ["banana.jpeg", "beancurd.jpeg", "carrot.jpeg"] },
    { group: 2, item: ["egg.jpeg", "filsh.jpeg"] },
  ];
  
  const today = new Date()
  const todayDate = today.getDate();
  const todayMonth = today.getMonth() + 1 ; 
  const thisYear = today.getFullYear();
  console.log(`${thisYear}-${todayMonth}-${todayDate}`)
  const [showEditBtn, setShowEditBtn] = useState(false)

  const showEditBtnHandler = (e) => {
    e.preventDefault();
    console.log("clicked")
    setShowEditBtn(!showEditBtn)

  }

  /**
   * 위험한 식품은 7일정도
   * 보통 식품은 기준 15일정도
   * 신선 식품은 기준 한달이상 남은 음식
   * 일년이상이 되는 식품 D-30일 이상
   * 한달이상이 되는 식품 D-30일 이상
   */

  return (
    <>
      <header
        style={{ width: "100%", height: "75px", border: "1px solid black" }}
      ></header>
      <section>
        <SideBar />
        {/* profile section */}
        <div
          style={{ width: "100%", height: "75px", border: "1px solid black" }}
        ></div>

        {/* refrigerator section */}
        <div>
          {/* go to recommanded recipes */}
          <RecommandBtnContainer>

          </RecommandBtnContainer>

          {/* managing ingredients in refrigerator */}
          <Refrigerator>

            {/* refrigerator header */}
            <RefrigeHeader data={data} />

            {/* refrigerator inner */}
          <RefrigeInner data={data} showEditBtn={showEditBtn} />
            
          </Refrigerator>

          {/* Click to Add, edit an ingredient to the refrigerator */}

          <PlusBtn showEditBtnHandler={showEditBtnHandler}/>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FreezerMain;
