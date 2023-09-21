import React from "react";
import './Navbar.css';
import avatar from '../../assets/man.png';
import { useAuth } from "../../context/AuthContext";

const Navbar = ({sidebarOpen, openSidebar}) => {
  const { role } = useAuth();
  //console.log('el role en nav es: ' + role)
  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars'></i>
      </div>
      <div className='navbar__left'>
        {role == 'admin' ? <a href="#">Suscribers</a> :<a href="#">Suscribers</a>}
        <a href="#">Video Management</a>
        {role == 'admin' ? <a className='active_link' href="#">Admin</a> : null}
        
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
