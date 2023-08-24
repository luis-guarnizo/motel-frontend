import { useEffect, useState } from "react";
import { useServices } from "../../context/ServiceContext";
import { useRooms } from "../../context/RoomContext";
import "./AdminPage.css";

function AdminPage() {
  const { getServices, services } = useServices();

  const { getRoom, room}  = useRooms();

  const [totalCost, setTotalCost] = useState([]);

  useEffect(() => {
    getServices();
    setTotalCost(0)
  }, []);

  return (
    <>
      <div className="form-container">
        <h1>Total: 700.000</h1>
        <h2>Tabla de servicios</h2>

        <table>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Habitación</th>
              <th>Costo</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>{service.serviceType}</td>
                <td>{service.roomNumber.roomNumber}</td>
                <td>{service.cost}</td>
                <td>{() => setTotalCost(totalCost + service.cost)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPage;
