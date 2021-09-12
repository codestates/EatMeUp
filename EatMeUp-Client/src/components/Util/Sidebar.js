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
            <i className='bx bx-grid-alt'></i>
            <span className='links_name'>Dashboard</span>
          </Link>
          <span className='tooltip'>Dashboard</span>
        </li>
        <li>
          <Link to='/user/myrecipe'>
            <i className='bx bx-user'></i>
            <span className='links_name'>User</span>
          </Link>
          <span className='tooltip'>User</span>
        </li>
        <li>
          <Link to='/user/myrecipe/create'>
            <i className='bx bx-chat'></i>
            <span className='links_name'>Messages</span>
          </Link>
          <span className='tooltip'>Messages</span>
        </li>
        <li>
          <Link to='/recipes'>
            <i className='bx bx-pie-chart-alt-2'></i>
            <span className='links_name'>Analytics</span>
          </Link>
          <span className='tooltip'>Analytics</span>
        </li>
        <li>
          <Link to='#'>
            <i className='bx bx-folder'></i>
            <span className='links_name'>File Manager</span>
          </Link>
          <span className='tooltip'>Files</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
