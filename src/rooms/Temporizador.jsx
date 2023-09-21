import { useEffect, useState} from "react";
import { useRooms } from "../context/RoomContext";


function Temporizador (props) {
    const { getRooms, room, rooms, updateRoom, getRoom }  = useRooms();
    const fechaFinal = new Date(props.fechaFinal);
    const [tiempoRestante, setTiempoRestante] = useState('');
  
    function handleClick() {

      alert('¡Entregando habitación!');
      //console.log(props.idRoom);

      var updatedRoom = {
        "availability": true // Update this value as needed
      };
      
      updateRoom(props.idRoom, updatedRoom);

      getRooms();
    }

    useEffect(() => {
        getRooms();
        //getRoom(rooms[0]._id)
        //console.log(room.roomNumber)
      }, []);
  
    const calcularTiempoRestante = () => {
      const ahora = new Date();
      const diferencia = fechaFinal - ahora;
  
      if (diferencia <= 0) {
        setTiempoRestante('¡Temporizador expirado!');
      } else {
        const horasRestantes = Math.floor(diferencia / 3600000); // 1 hora = 3600000 ms
        const minutosRestantes = Math.floor((diferencia % 3600000) / 60000); // 1 minuto = 60000 ms
  
        setTiempoRestante(`${horasRestantes} horas y ${minutosRestantes} minutos`);
      }
    };
  
    useEffect(() => {
      const intervalo = setInterval(calcularTiempoRestante, 1000);
  
      return () => {
        clearInterval(intervalo);
      };
    }, []);
  
    return (
      <div>
        <p>Tiempo restante: {tiempoRestante}</p>
        {tiempoRestante == '¡Temporizador expirado!' && <button onClick={handleClick}>Entregar</button>}
      </div>
    );
  }

  export default Temporizador;