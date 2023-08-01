
import  './Sidebar.css';
import logo from '../../assets/react.svg';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
  return (
    <div className={sidebarOpen ? 'sidebar__responsive' : ''} id='sidebar'>
        <div className='sidebar__title'>
            <div className='sidebar__img'>
                <img src={logo} alt="logo" />
                <h1>Codersbite</h1>
            </div>
            <i className='fa fa-times' id='sidebarIcon' onClick={() => closeSidebar()}></i>
        </div>
        <div className="sidebar__menu">
            <div className='sidebar_link active_menu_link'>
                <i className='fa fa-home'></i>
                <a href="#">Dashboard</a>
            </div>
            <h2>Habitaciones</h2>
            <div className="sidebar__link">
                <i className='fa fa-bed'></i>
                <a href="/rooms">Alquiler de Habitaciones</a>
            </div>
            <div className="sidebar__link">
                <i className='fa fa-hourglass-end'></i>
                <a href="#">Control de Habitaciones</a>
            </div>
{/*             <div className="sidebar__link">
                <i className='fa fa-wrench'></i>
                <a href="#">Employee Management</a>
            </div>
            <div className="sidebar__link">
                <i className='fa fa-archive'></i>
                <a href="#">Warehouse</a>
            </div>
            <div className="sidebar__link">
                <i className='fa fa-handshake-o'></i>
                <a href="#">Contracts</a>
            </div> */}
            <h2>Snacks y Bebidas</h2>
            <div className="sidebar__link">
                <i className='fa fa-shopping-cart'></i>
                <a href="#">Ventas</a>
            </div>
            <div className="sidebar__link">
                <i className='fa fa-plus-square'></i>
                <a href="#">Admin Productos</a>
            </div>
            <div className="sidebar__link">
                <i className='fa fa-tasks'></i>
                <a href="#">Total Ventas</a>
            </div>
            {/* <div className="sidebar__link">
                <i className='fa fa-files-o'></i>
                <a href="#">Apply for leave</a>
            </div> */}
            <h2>Administración</h2>
            <div className="sidebar__link">
                <i className='fa fa-calendar-check-o'></i>
                <a href="#">Resumen Turno</a>
            </div>
            <div className="sidebar__link">
                <i className='fa fa-briefcase'></i>
                <a href="#">Gastos Cartera</a>
            </div>
            <div className="sidebar__logout">
                <i className='fa fa-power-off'></i>
                <a href="#">Log outt</a>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
