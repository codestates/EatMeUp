import React from "react";
import styled from "styled-components";
import RefrigeInner from "./sections/RefrigeInner";
import SideBar from "../Util/Sidebar";
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
    { group: 0, item: ["1", "2"] },
    { group: 1, item: ["3", "4", "5"] },
    { group: 2, item: ["6", "7"] },
  ];
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

        {/* freezer main section */}
        <div>
          {/* go to recommanded recipes */}
          <RecommandBtnContainer></RecommandBtnContainer>

          {/* managing ingredients in refrigerator */}
          <Refrigerator>
            {/* refrigerator inner */}
            <RefrigeInner data={data} />
          </Refrigerator>
        </div>
      </section>
    </>
  );
};

export default FreezerMain;
