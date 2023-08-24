import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRooms } from "../../context/RoomContext";
import { useServices } from "../../context/ServiceContext";
import "./ServiceFormPage.css";

function ServiceFormPage() {
  const { register, handleSubmit } = useForm();

  //const { services } = useServices();
  const { createService } = useServices();
  // console.log(tasks);
  const [opciones, setOpciones] = useState([]);
  //const [opcionCheck, setOpcionCheck] = useState();
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");
  const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState("");
  const [personaSeleccionado, setPersonaSeleccionado] = useState();

  const { getRooms, rooms } = useRooms();

  const opciones1 = [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    // Agrega aquí las 16 opciones restantes
  ];

  const servicios = [
    "1 Hora - $ 12.000",
    "4 Horas - $ 17.000",
    "12 Horas - $ 25.000",
    // Agrega aquí las 16 opciones restantes
  ];

  const vehiculos = [
    "Ninguno",
    "Moto",
    "Bicicleta",
    // Agrega aquí las 16 opciones restantes
  ];

  const personas = [
    1, 2, 3,
    // Agrega aquí las 16 opciones restantes
  ];

  useEffect(() => {
    getRooms();
    const opcionData = rooms.map((room) => room.roomNumber);
    setOpciones(opcionData);
    console.log(opciones);
    //console.log(opciones1);
    //console.log('array' + opcionData);
    //setOpcionSeleccionada(opcionData[1])
    //console.log(opcionSeleccionada)

    // Establecemos la opción seleccionada inicialmente como la primera opción
  }, []);

  const handleRoomsCheckboxChange = (event) => {
    console.log(event.target.value);
    if (opcionSeleccionada == event.target.value) {
      setOpcionSeleccionada(""); // Desmarca el checkbox si se hace clic nuevamente en la opción seleccionada
    } else {
      setOpcionSeleccionada(event.target.value); // Marca el checkbox seleccionado
      // alert(opcionSeleccionada);
      console.log("la opción seleccionada fue: " + opcionSeleccionada);
    }
  };

  const handleServiceCheckboxChange = (event) => {
    console.log(event.target.value);
    if (servicioSeleccionado == event.target.value) {
      setServicioSeleccionado(""); // Desmarca el checkbox si se hace clic nuevamente en la opción seleccionada
    } else {
      setServicioSeleccionado(event.target.value); // Marca el checkbox seleccionado
      // alert(opcionSeleccionada);
      console.log("la opción seleccionada fue: " + servicioSeleccionado);
    }
  };

  const handleVehiculoCheckboxChange = (event) => {
    console.log(event.target.value);
    if (vehiculoSeleccionado == event.target.value) {
      setVehiculoSeleccionado(""); // Desmarca el checkbox si se hace clic nuevamente en la opción seleccionada
    } else {
      setVehiculoSeleccionado(event.target.value); // Marca el checkbox seleccionado
      // alert(opcionSeleccionada);
      console.log("la opción seleccionada fue: " + vehiculoSeleccionado);
    }
  };

  const handlePersonasCheckboxChange = (event) => {
    console.log(event.target.value);
    if (personaSeleccionado == event.target.value) {
      setPersonaSeleccionado(); // Desmarca el checkbox si se hace clic nuevamente en la opción seleccionada
    } else {
      setPersonaSeleccionado(event.target.value); // Marca el checkbox seleccionado
      console.log("la opción seleccionada fue: " + personaSeleccionado);
    }
  };

  /*  const handleRadioChange = (event) => {
    setOpcionSeleccionada(event.target.value);
    console.log(event.target.value);
  }; */

  const onSubmit = handleSubmit((data) => {
    //event.preventDefault();
    //TODO: convertir datos y agregar el costo AQUI
    console.log(data.serviceType)
    switch (data.serviceType) {
      case '1 Hora - $ 12.000':
        console.log('1 hora')
        data["cost"] = 12000;
        break;
      case '4 Horas - $ 17.000':
        console.log('4 horas');
        data["cost"] = 17000;
        break;
      case '12 Horas - $ 25.000':
        console.log('12 horas');
        data["cost"] = 25000;
        break;
      default:
        break;
    }
    //objeto["nuevaPropiedad"] = "Nuevo valor";
    createService(data);
    if (opcionSeleccionada == "") {
      alert("Por favor, selecciona una opción.");
    } else {
      alert("Opción seleccionada: " + opcionSeleccionada);
      // Aquí puedes enviar la opción seleccionada al servidor o realizar otras acciones con los datos.
    }
  });
  return (
    <>
      <div className="form-container">
        <h2>Formulario de Ingreso</h2>
        <form onSubmit={onSubmit}>
          <div className="menu-container">
            <h2>Habitaciones</h2>
            <div className="menu-grid">
              {rooms.map((opcion, index) => (
                <div className="menu-item" key={index}>
                  <input
                    type="radio"
                    id={"opcion-${index}"}
                    name={"opcion"}
                    value={opcion._id}
                    {...register("roomNumber")}
                    // checked={opcionSeleccionada == opcion._id}
                    //onChange={handleRoomsCheckboxChange}
                  />
                  <label htmlFor={"opcion-${index}"}>
                    H {opcion.roomNumber}
                  </label>
                </div>
              ))}

              {/* {rooms.map((room, index) => (
                <div className="menu-item" key={index}>
                  <input
                    type="checkbox"
                    id={'opcion-${index}'}
                    name={"opcion"}
                    value={room.roomNumber}
                    checked={opcionSeleccionada === room.roomNumber}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={'${room.roomNumber}'}>{room.roomNumber}</label>
                </div>
              ))} */}
            </div>
          </div>

          <div className="menu-container">
            <h2>Servicios</h2>
            <div className="menu-grid-row">
              {servicios.map((opcion, index) => (
                <div className="menu-item" key={index}>
                  <input
                    
                    type="radio"
                    id={`servicio-${index}`}
                    name="servicio"
                    value={opcion}
                    {...register("serviceType")}
                    //checked={servicioSeleccionado == opcion}
                    //onChange={handleServiceCheckboxChange}
                  />
                  <label htmlFor={`servicio-${index}`}>{opcion}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="menu-container">
            <h2>Vehículo</h2>
            <div className="menu-grid">
              {vehiculos.map((opcion, index) => (
                <div className="menu-item" key={index}>
                  <input
                    
                    type="radio"
                    id={`opcion-${index}`}
                    name="opcion"
                    value={opcion}
                    {...register("vehicle")}
                    //checked={vehiculoSeleccionado == opcion}
                    //onChange={handleVehiculoCheckboxChange}
                  />
                  <label htmlFor={`opcion-${index}`}>{opcion}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="menu-container">
            <h2>Personas</h2>
            <div className="menu-grid">
              {personas.map((opcion, index) => (
                <div className="menu-item" key={index}>
                  <input
                    
                    type="radio"
                    id={`opcion-${index}`}
                    name="opcion"
                    value={opcion}
                    {...register("guests")}
                    //checked={personaSeleccionado == opcion}
                    //onChange={handlePersonasCheckboxChange}
                  />
                  <label htmlFor={`opcion-${index}`}>{opcion}</label>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="menu-container">
            <h2>Servicio</h2>
            <div className="menu-grid">
              <div className="menu-item">
                <input type="checkbox" id="opcion1" name="opcion1" />
                <label htmlFor="opcion1">1 Hora - $ 12.000</label>
              </div>
              <div className="menu-item">
                <input type="checkbox" id="opcion2" name="opcion2" />
                <label htmlFor="opcion2">4 Horas - $ 17.000</label>
              </div>
              <div className="menu-item">
                <input type="checkbox" id="opcion3" name="opcion3" />
                <label htmlFor="opcion3">12 Horas - $ 25.000</label>
              </div>
            </div>
          </div> */}

          <button className="form-button" type="submit">
            Alquilar
          </button>
        </form>
      </div>

      {/* <div className="form-container">
        <h2>Menú con Checkboxes en React</h2>
        <form>
          {opciones.map((opcion, index) => (
            <div className="form-checkbox" key={index}>
              <input
                type="checkbox"
                id={`opcion-${index}`}
                name="opcion"
                value={opcion}
                checked={opcionSeleccionada == opcion}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`opcion-${index}`}>{opcion}</label>
            </div>
          ))}
        </form>
      </div> */}
    </>
  );
}

export default ServiceFormPage;
