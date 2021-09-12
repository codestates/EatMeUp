import React from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient";
import PlusBtn from "./PlusBtn";

/* style-component */
const Storage = styled.div`
  min-height: 600px;
  border: 1px solid black;
  border-radius: 10px;
`;

const StorageUpper = styled.div`
  max-width: 350px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 5px;
`;

const RefrigeInner = () => {
  
  /* function area */

  return (
    <>
      {/* store at room temperature */}
      <Storage>
        <StorageUpper>
          <div></div>
        </StorageUpper>
        <Ingredient />
        <PlusBtn />
      </Storage>

      {/* store at refrigerator */}
      <Storage>
        <StorageUpper>
          <div></div>
        </StorageUpper>
        <Ingredient />
        <PlusBtn />
      </Storage>

      {/* store at freezer */}
      <Storage>
        <StorageUpper>
          <div></div>
        </StorageUpper>
        <Ingredient />
        <PlusBtn />
      </Storage>
    </>
  );
};

export default RefrigeInner;
