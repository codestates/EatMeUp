import React from 'react'
import styled from 'styled-components'
import Calendar from './sections/Calendar'
import Weekly from './sections/Weekly'
import Sidebar from '../Util/Sidebar'

const TitleArea = styled.div`
width: 100%;
height: 80px;
margin-top: 10px;
margin-bottom: 8px;
border: 1px solid black;
`;

const MenuPlanner = () => {
  
  return (
    <div>
      <header
        style={{ width: "100%", height: "75px", border: "1px solid black" }}
      ></header>
      <section>
      <Sidebar />
      <TitleArea></TitleArea>
      <div style={{ width: "70%", height: "90%", margin: "2rem auto"}}>
      {/* <Calendar /> */}
      <Weekly />
      </div>
      </section>
    </div>
  )
}

export default MenuPlanner
