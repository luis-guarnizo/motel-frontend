import "./Sidebar.css";
import logo from "../../assets/react.svg";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const { role, signout } = useAuth();

  // Define el método que quieres ejecutar cuando se hace clic en el enlace.
  const handleClick = () => {
    // Coloca el código que deseas ejecutar aquí.
    console.log("Se hizo clic en el enlace");
    signout();
  };

  return (
    <div className={sidebarOpen ? "sidebar__responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Motel</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar_link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>Habitaciones</h2>
        <div className="sidebar__link">
          <i className="fa fa-bed"></i>
          <a href="/add-service">Alquiler de Habitaciones</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-hourglass-end"></i>
          <a href="/admin-rooms">Control de Habitaciones</a>
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
          <i className="fa fa-shopping-cart"></i>
          <a href="#">Ventas</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-plus-square"></i>
          <a href="#">Admin Productos</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-tasks"></i>
          <a href="#">Total Ventas</a>
        </div>
        {/* <div className="sidebar__link">
                <i className='fa fa-files-o'></i>
                <a href="#">Apply for leave</a>
            </div> */}
        {role == "admin" ? <h2>Administración</h2> : null}
        {role == "admin" ? (
          <div className="sidebar__link">
            <i className="fa fa-calendar-check-o"></i>
            <a href="/admin">Resumen Turno</a>
          </div>
        ) : null}

        {role == "admin" ? (
          <div className="sidebar__link">
            <i className="fa fa-briefcase"></i>
            <a href="#">Gastos Cartera</a>
          </div>
        ) : null}
        {/* Resumen del turno para recepcionistas usuarios */}
        {role == "user" ? <h2>Administración Turno</h2> : null}
        {role == "user" ? (
          <div className="sidebar__link">
            <i className="fa fa-calendar-check-o"></i>
            <a href="/admin-reception">Resumen Turno</a>
          </div>
        ) : null}

        {role == "user" ? (
          <div className="sidebar__link">
            <i className="fa fa-calendar-check-o"></i>
            <a href="/entrega-reception">Entregar Turno</a>
          </div>
        ) : null}

        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="/login" onClick={handleClick}>
            Log outt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
