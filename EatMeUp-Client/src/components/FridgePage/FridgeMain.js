import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { foodData } from "../dummydata";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { allFoods, saveFridgeInfo } from "../../_actions/fridgeActions";

/* 컴포넌트 */
import FridgeInner from "./sections/FridgeInner";
import FridgeBtn from "./sections/FridgeBtn";
import Header from "../Util/Header";
import Footer from "../Util/Footer";
import EditFridge from "./sections/EditFridge";

/* 냉장고 페이지 */
const FridgeMain = () => {

  const dispatch = useDispatch();
  const { foods } = useSelector((state) => state.allFoods);

  // useEffect(() => {
  //   dispatch(allFoods());
  // }, [dispatch]);

  /* 유통기한을 D-몇일로 나타내기 위해 계산하는 함수 */
  // const FOODS = foods.map((type, typeIdx) => {
  //  const itemarray = type.items.map((food) => {
  //     const splited = food.life.split("-");
  //     const getDate = new Date();
  //     const today = new Date(
  //       getDate.getFullYear(),
  //       getDate.getMonth(),
  //       getDate.getDay(),
  //     );
  //     const foodLife = new Date(
  //       Number(splited[0]),
  //       Number(splited[1]),
  //       Number(splited[2]),
  //     );

  //     const elapsedMSec = foodLife.getTime() - today.getTime(); // 172800000
  //     const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24; // 2

  //     return {
  //       id: food.id,
  //       food_name: food.food_name,
  //       food_image: food.food_image,
  //       frez_type: food.frez_type,
  //       life: elapsedDay,
  //       created_at: food.created_at,
  //       update_at: food.update_at,
  //     };
  //   });

  //   return {
  //     type: typeIdx,
  //     items: itemarray,
  //   };
  // });

  // /* 유통기한이 임박한 냉장고 속 음식 보여주기 */
  // let redFoods = []
  // FOODS.forEach((food) => {

  //   if (food.life <= 30) {
  //     redFoods.push(food.food_name)
  //   }
  // });

  // /* 보관타입별로 음식을 나눈 배열 */
  // const foodlist = [
  //   { type: 0, items: [] },
  //   { type: 1, items: [] },
  //   { type: 2, items: [] },
  // ];

  // console.log(foodlist)
  // FOODS.forEach((food) => {
  //   if (food.frez_type === 0) {
  //     foodlist[0].items.push(food);
  //   } else if (food.frez_type === 1) {
  //     foodlist[1].items.push(food);
  //   } else {
  //     foodlist[2].items.push(food);
  //   }
  // });

  const [checkedFoods, setCheckedFoods] = useState([]);
  const [foodList, setFoodList] = useState(foods);
  const [showEditBtn, setShowEditBtn] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const showEditBtnHandler = () => {
    setShowEditBtn(!showEditBtn);

    if(showEditBtn) {
      dispatch(saveFridgeInfo(foodList))
    }
  };

  const handleDelete = (idx) => {
    const deleteFood = checkedFoods.filter((food, id) => {
      if (id !== idx) return food;
    });
    setCheckedFoods(deleteFood);
    setCurrentIdx(idx);
  };
  console.log(foodList)

  return (
    <>
      <Header id={1} />
      <section>
        {/* 유통기한이 임박한 음식 추천기능 */}
       <SearchBox>
          <FridgeTitle>마이 냉장고</FridgeTitle>

          <CheckedFoodsBox>
            <Stack direction='row' spacing={1}>
              <i className='fas fa-shopping-basket'></i>
              {checkedFoods.map((food, idx) => {
                return (
                  <Chip
                    key={idx}
                    label={food}
                    onDelete={() => handleDelete(idx)}
                  />
                );
              })}
            </Stack>
          </CheckedFoodsBox>

          <GotoBtnBox>
            레시피 보기 <i className='fas fa-chevron-right'></i>
          </GotoBtnBox>
        </SearchBox>

        {/* 냉장고 */}
        <ContentBox>

          {/* 냉장고 안 */}
          {showEditBtn ? (
             <EditFridge
              foodList={foodList}
               setFoodList={setFoodList}
              showEditBtn={showEditBtn}
             />
           ) : (
             <FridgeInner
               foods={foodList}
               checkedFoods={checkedFoods}
               setCheckedFoods={setCheckedFoods}
             />
           )}

           {/* 냉장고 핸들러 버튼들 */}
           <FridgeBtn
             showEditBtnHandler={showEditBtnHandler}
             showEditBtn={showEditBtn}
           />
       </ContentBox> 
      </section> 
      <Footer />
    </>
  );
};

const SearchBox = styled.div`
  width: 85%;
  margin: 0.5rem auto;
  display: flex;
  margin-top: 25px;
`;

const FridgeTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const CheckedFoodsBox = styled.div`
  width: 70%;
  height: 43px;
  border: 1px solid #ced0ce;
  border-radius: 30px 0px 0px 30px;
  margin-top: 15px;
  margin-left: 18px;
  padding-top: 5px;

  .fa-shopping-basket {
    margin-left: 20px;
    color: #a8a7a3;
    line-height: 30px;
  }

  .name {
    margin-left: 15px;
    padding: 3px 20px;
    background-color: #e1e0dc;
    border-radius: 30px;
  }
`;

const GotoBtnBox = styled.div`
  margin-top: 15px;
  border: 1px solid #ced0ce;
  width: 150px;
  height: 43px;
  border-radius: 0px 30px 30px 0px;
  background: white;
  font-weight: bold;
  padding: 8px;
  text-align: center;
`;

const ContentBox = styled.div`
  width: 85%;
  margin: 2rem auto;
`;

export default FridgeMain;
