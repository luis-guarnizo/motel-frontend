import React from "react";
import './Navbar.css';
import avatar from '../../assets/man.png';

const Navbar = ({sidebarOpen, openSidebar}) => {
  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars'></i>
      </div>
      <div className='navbar__left'>
        <a href="#">Suscribers</a>
        <a href="#">Video Management</a>
        <a className='active_link' href="#">Admin</a>
      </div>
      <div className='navbar__right'>
        <a href="#">
        <i className="fa fa-bed"></i>
        </a>
        <a href="#">
            <i className='fa fa-shopping-cart'></i>
        </a>
        <a href="#">
            <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
