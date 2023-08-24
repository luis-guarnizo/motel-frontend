import "./Rooms.css";
import hello from "../assets/react.svg";
import { useEffect } from "react";
import { useRooms } from "../context/RoomContext";

const Room = () => {

  const { getRooms, rooms, }  = useRooms();

  useEffect(() => {
    getRooms();
    //getRoom(rooms[0]._id)
    //console.log(room.roomNumber)
  }, []);
  

  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Resumen Diario</h1>
            <p>Bienvenido al panel de administración</p>
          </div>
        </div>

        <div className="charts">
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Control Habitaciones</h1>
                <p>Disponibilidad de Habitaciones</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>

            <div className="charts__right__cards">

              {rooms.map((roomObject) => (
                
                <div className={roomObject.availability ? 'card1' : 'card4'}  key={roomObject._id}>
                  <h1>H{roomObject.roomNumber}</h1>
                  <p>{roomObject.availability ? 'Disponible' : 'Ocupada'}</p>
                  {/* {getRoom(roomObject._id)} */}
                  {/* <h1>get room {room.roomNumber}</h1> */}
                  <p>00:24:34</p>
                </div>

                
              ))}

              {/* <div className="card4">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>
              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card4">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card4">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>
              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card4">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card4">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card4">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>
              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card1">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div>

              <div className="card4">
                <h1>H1</h1>
                <p>00:24:34</p>
              </div> */}

              {/* <div className="card1">
                    <h1>Sales</h1>
                    <p>$124,300</p>
                </div>

                <div className="card1">
                    <h1>Users</h1>
                    <p>1000</p>
                </div>

                <div className="card1">
                    <h1>Orders</h1>
                    <p>1881</p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Room;
