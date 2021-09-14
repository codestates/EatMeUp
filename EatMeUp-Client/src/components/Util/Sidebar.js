import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const openSideBarHandler = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div
      className={openSideBar ? "sidebar open" : "sidebar"}
      style={openSideBar ? { width: "150px" } : { width: "50px" }}
    >
      <div className='logo-details'>
        <i className='bx bx-menu' id='btn' onClick={openSideBarHandler}></i>
      </div>
      <ul className='nav-list'>
        <li>
          <Link to='/user'>
            <i class='bx bx-fridge'></i>
            <span className='links_name'>My Fridge</span>
          </Link>
          <span className='tooltip'>Fridge</span>
        </li>
        <li>
          <Link to='/user/myrecipe'>
            <i class='bx bx-restaurant'></i>
            <span className='links_name'>My Recipe</span>
          </Link>
          <span className='tooltip'>My Recipe</span>
        </li>
        <li>
          <Link to='/user/myrecipe/create'>
            <i class='bx bx-heart'></i>
            <span className='links_name'>My Favorite</span>
          </Link>
          <span className='tooltip'>My Favorite</span>
        </li>
        <li>
          <Link to='/user/myplanner'>
            <i class='bx bx-calendar'></i>
            <span className='links_name'>Calendar</span>
          </Link>
          <span className='tooltip'>Calendar</span>
        </li>
        <li>
          <Link to='#'>
            <i class='bx bx-cog'></i>
            <span className='links_name'>Setting</span>
          </Link>
          <span className='tooltip'>Setting</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
