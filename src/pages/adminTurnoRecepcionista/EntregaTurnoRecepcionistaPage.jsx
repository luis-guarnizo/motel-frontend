import { useEffect, useState } from "react";
import { useServices } from "../../context/ServiceContext";
import { useResumeServiceTurno } from "../../context/ResumeServiceTurnoContext";
import { useAuth } from "../../context/AuthContext";

import "./AdminTurnoRecepcionista.css";

import { useForm } from "react-hook-form";

// Estilos para el contenedor que utiliza flexbox
const containerStyle = {
  display: "flex",
  flexDirection: "column", // Cambiamos la dirección a columna
  alignItems: "center", // Alinea los elementos horizontalmente al centro
  height: "100vh", // Altura del 100% del viewport
};

const buttonContainerStyle = {
  display: "flex",
  gap: "10px", // Espacio entre los botones
};

const buttonConfirmarStyle = {
  backgroundColor: "#007BFF", // Color de fondo
  color: "white", // Color de texto
  border: "none", // Sin borde
  padding: "10px 20px", // Espacio interno de los botones
  fontSize: "16px", // Tamaño de fuente
  borderRadius: "5px", // Bordes redondeados
  cursor: "pointer", // Cambia el cursor al pasar sobre el botón
};

const buttonModificarStyle = {
  backgroundColor: "#FF0000", // Color de fondo
  color: "white", // Color de texto
  border: "none", // Sin borde
  padding: "10px 20px", // Espacio interno de los botones
  fontSize: "16px", // Tamaño de fuente
  borderRadius: "5px", // Bordes redondeados
  cursor: "pointer", // Cambia el cursor al pasar sobre el botón
};

const inputTotalTecogidoStyle = {
  //backgroundColor: "#FF0000", // Color de fondo
  color: "black", // Color de texto
  border: "none", // Sin borde
  padding: "10px 20px", // Espacio interno de los botones
  fontSize: "16px", // Tamaño de fuente
  borderRadius: "5px", // Bordes redondeados
  cursor: "pointer", // Cambia el cursor al pasar sobre el botón
};


function EntregaReceptionPage() {
  const {
    resumeServiceTurnos,
    createResumeServiceTurnos,
    getResumeServiceTurnos,
  } = useResumeServiceTurno();

  const { services, totalCostTurno, setTotalCostTurno, getServicesByTurno } =
    useServices();

  const { user } = useAuth();

  let dataConfirm = {
    
  };

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarBtnModificar, setMostrarBtnModificar] = useState(true);
  const [mostrarBtnConfirmar, setMostrarBtnConfirmar] = useState(true);
  const [mostrarBtnNuevaConfirmacion, setMostrarBtnNuevaConfirmacion] = useState(false);

  const abrirFormulario = () => {
    setMostrarFormulario(true);
    setMostrarBtnModificar(false);
    setMostrarBtnConfirmar(false);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  function handleClickConfirmar() {
    console.log(user);
    dataConfirm["totalSoftware"] = totalCostTurno;
    dataConfirm["totalRecepcionista"] = totalCostTurno;
    dataConfirm["diferencia"] = 0;
    dataConfirm["totalFinal"] = totalCostTurno;
    console.log('dataconfirm');
    console.log(dataConfirm);
    createResumeServiceTurnos(dataConfirm);
    alert("Turno Confirmado");
    setMostrarBtnConfirmar(false);
    setMostrarBtnModificar(false);
    setMostrarBtnNuevaConfirmacion(true)
  }

  const handleClickNuevaConfirmar = () => {
    setMostrarBtnConfirmar(true);
    setMostrarBtnModificar(true);
    setMostrarBtnNuevaConfirmacion(false)
  };

  const { register, handleSubmit } = useForm();


  const onSubmit = handleSubmit((data) => {
    console.log(data.totalRecepcionista);
    data["totalSoftware"] = totalCostTurno;
    data["diferencia"] = totalCostTurno - data.totalRecepcionista;
    data["totalFinal"] = totalCostTurno - data.diferencia;
    console.log('Data')
    console.log(data)
    createResumeServiceTurnos(data);
  })

  useEffect(() => {
    getServicesByTurno();

    console.log(services);

    return () => {};
  }, []);

  useEffect(() => {
    // Calcula el costo total después de obtener los servicios
    let calculatedTotalCost = 0;
    services.forEach((service) => {
      calculatedTotalCost += service.cost;
    });
    setTotalCostTurno(calculatedTotalCost);
    // setTotalCost(calculatedTotalCost);
  }, [services]);

  return (
    <>
      <div className="form-container">
        {/* <h1>Total: {totalCost.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</h1> */}

        <h1>
          Total:{" "}
          {totalCostTurno.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </h1>
        <br />
        <p>Comfirme el dinero obtenido en el turno</p>
        <p>correspondiente a el alquiler de habitaciones</p>
        <br />
        <div style={containerStyle}>
          <div style={buttonContainerStyle}>
            {mostrarBtnConfirmar && (
              <button
                onClick={handleClickConfirmar}
                style={buttonConfirmarStyle}
              >
                Confirmar
              </button>
            )}
            {mostrarBtnModificar && (
              <button onClick={abrirFormulario} style={buttonModificarStyle}>
                Modificar
              </button>
            )}
            {mostrarBtnNuevaConfirmacion && (
              <button
                onClick={handleClickNuevaConfirmar}
                style={buttonConfirmarStyle}
              >
                Nueva Confirmación
              </button>
            )}
          </div>

          {mostrarFormulario && (
            <div className="modal">
              <div className="modal-contenido">
                <span className="cerrar" onClick={cerrarFormulario}>
                  &times;
                </span>
                <h2>Ingrese información:</h2>
                <form onSubmit={onSubmit}>
                  {/* Aquí coloca los campos del formulario */}
                  <label>
                    Total Recogido:
                    <input
                    style={inputTotalTecogidoStyle}
                    type="number"
                    id='totalRecogido'
                    name="totalRecogido"
                    {...register("totalRecepcionista")}
                    //checked={personaSeleccionado == opcion}
                    //onChange={handlePersonasCheckboxChange}
                  />
                  </label>
                  

                  {/* Otros campos del formulario */}
                  <button type="submit" style={buttonConfirmarStyle}>Confirmar</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EntregaReceptionPage;
