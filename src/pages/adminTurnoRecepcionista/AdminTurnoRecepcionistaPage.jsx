import { useEffect, useState } from "react";
import { useServices } from "../../context/ServiceContext";
import { useRooms } from "../../context/RoomContext";
import "./AdminTurnoRecepcionista.css";


function AdminReceptionPage() {
  const { services, totalCostTurno, setTotalCostTurno,getServicesByTurno } = useServices();

  const { getRoom, room}  = useRooms();

  const [totalCost, setTotalCost] = useState(0);

  

  useEffect(() => {
    
    getServicesByTurno();
    
    console.log(services)
    
    return () => {
      
    }
  }, []);

  useEffect(() => {
    // Calcula el costo total después de obtener los servicios
    let calculatedTotalCost = 0;
    services.forEach((service) => {
      calculatedTotalCost += service.cost;
    });
    setTotalCostTurno(calculatedTotalCost);
    // setTotalCost(calculatedTotalCost);
  }, [services])

  return (
    <>
      <div className="form-container">
        {/* <h1>Total: {totalCost.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</h1> */}

        <h1>Total: {totalCostTurno.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</h1>
        <br />
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
            {services.map((service) => (
              <tr key={service._id}>
                <td>{service.serviceType}</td>
                <td>{service.roomNumber.roomNumber}</td>
                <td>{service.cost.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminReceptionPage;
