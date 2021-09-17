import React, { useState } from 'react'
import AddIngre from './AddFood/AddIngre'


const FridgeBtn = ({ showEditBtnHandler }) => {

  const [openAddWindow, setOpenAddWindow] = useState(false)

  const openAddWindowHandler = () => {
    setOpenAddWindow(true)
  }
  return (
    <div className='fridgeBtn_box'>
    <div className='fridgeBtn'>
      <button
      onClick={openAddWindowHandler}
      >음식 추가하기</button>
    </div>
    <div className='fridgeBtn'>
      <button
      onClick={showEditBtnHandler}
      >음식 수정하기</button>
    </div>

    {openAddWindow ? <AddIngre setOpenAddWindow={setOpenAddWindow} /> : ""}
  </div>
  )
}

export default FridgeBtn
