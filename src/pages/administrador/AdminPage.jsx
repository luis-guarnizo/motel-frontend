import { useEffect, useState } from "react";
import { useServices } from "../../context/ServiceContext";
import { useResumeServiceTurno } from "../../context/ResumeServiceTurnoContext";
import { useRooms } from "../../context/RoomContext";
import "./AdminPage.css";

function AdminPage() {
  const { getServices, services } = useServices();

  const { resumeServiceTurnos, getResumeServiceTurnos } =
    useResumeServiceTurno();

  const { getRoom, room } = useRooms();

  const [totalCost, setTotalCost] = useState([]);

  console.log(resumeServiceTurnos);

  useEffect(() => {
    getResumeServiceTurnos();
    // getService();
    setTotalCost(0);
  }, []);

  return (
    <>
      <div className="form-container">
        <h2>Resumen de Turnos</h2>

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Turno</th>
              <th>Nombre</th>
              <th>T. Software</th>
              <th>T. Recep.</th>
              <th>Tatal Real</th>
            </tr>
          </thead>
          <tbody>
            {resumeServiceTurnos.map((resumeServiceTurno) => (
              <tr key={resumeServiceTurno._id}>
                <td>
                  {new Date(resumeServiceTurno.createdAt).toLocaleDateString(
                    "es-ES",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }
                  )}
                </td>
                <td>{resumeServiceTurno.turno}</td>
                <td>{resumeServiceTurno.nombreRecepcionista}</td>
                <td>{resumeServiceTurno.totalSoftware}</td>
                <td>{resumeServiceTurno.totalRecepcionista}</td>
                <td>{resumeServiceTurno.totalFinal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPage;
