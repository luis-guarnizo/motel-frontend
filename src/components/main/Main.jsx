import "./Main.css";
import hello from "../../assets/react.svg";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">

        {/* <div className="main__cards">
          <div className="card_options">
            <div className="card_button_container">
              <a href="">
                <div className="card_button">
                  <i className="fa fa-bed fa-2x text-lightblue"></i>
                </div>
              </a>
              <a href="">
                <div className="card_button">
                  <i className="fa fa-shopping-cart fa-2x text-lightblue"></i>
                </div>
              </a>
            </div>
          </div>
        </div> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Resumen Diario</h1>
            <p>Bienvenido al panel de administración</p>
          </div>
        </div>

        <div className="main__cards">
          {/* <div className="card">
            <div className="card_button_container">
              <a href="">
                <div className="card_button">
                  <i className="fa fa-bed fa-2x text-lightblue"></i>
                </div>
              </a>
              <a href="">
                <div className="card1">
                  <i className="fa fa-shopping-cart fa-2x text-lightblue"></i>
                </div>
              </a>
            </div>
          </div> */}

          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Número de Usuarios</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Tiempo Total</p>
              <span className="font-bold text-title">120 Horas</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-usd fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Ingresos por Habitación</p>
              <span className="font-bold text-title">3000000</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-beer fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Ingresos Snacks</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Chart />
          </div>

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

export default Main;
