import React from "react";
import styled from "styled-components";
import RefrigeInner from "./sections/RefrigeInner";

const RecommandBtnContainer = styled.div`
  width: 80%;
  height: 70px;
  border: 1px solid black;
  margin: 0.5rem auto;
`;
const Refrigerator = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0.5rem auto;
  grid-gap: 8px;
`;

const FreezerMain = () => {
  return (
    <>
      <header
        style={{ width: "100%", height: "75px", border: "1px solid black" }}
      ></header>
      <section>
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
            <RefrigeInner />
          </Refrigerator>
        </div>
      </section>
    </>
  );
};

export default FreezerMain;
