import { useEffect, useState } from "react";
import { useServices } from "../../context/ServiceContext";

function Admin() {


  const { getServices, services } = useServices();


  useEffect(() => {
    getServices();
    
  }, []);


  return (
    <>
    <h1>Admin</h1>
      {/* <div className="form-container">
        <h2>Tabla de servicios</h2>
        <table>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Habitación</th>
            <th>Costo</th>
          </tr>
        </thead>
        <tbody>
          {services.map(user => (
            <tr key={user._id}>
              <td>{user.serviceType}</td>
              <td>{user.roomNumber}</td>
              <td>{user.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div> */}

      
    </>
  );
}

export default Admin;