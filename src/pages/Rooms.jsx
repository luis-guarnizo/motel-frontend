import "./Rooms.css";
import hello from "../assets/react.svg";


const Room = () => {
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
              </div>

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