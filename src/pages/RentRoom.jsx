import { useForm } from "react-hook-form";
import "./RentRoom.css";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="form-container">
      <h2>Formulario de Ingreso</h2>
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >
        <div className="menu-container">
          <h2>Servicio</h2>
          <div className="menu-grid-row">
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
        </div>
        
        <div className="menu-container">
          <h2>Vehículo</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <input type="checkbox" id="opcion1" name="opcion1" />
              <label htmlFor="opcion1">Ninguno</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">Bicicleta</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion3" name="opcion3" />
              <label htmlFor="opcion3">Moto</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion4" name="opcion4" />
              <label htmlFor="opcion4">Carro</label>
            </div>
          </div>
        </div>

        <div className="menu-container">
          <h2>Cantidad de Personas</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <input type="checkbox" id="opcion1" name="opcion1" />
              <label htmlFor="opcion1">1</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">2</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">3</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">4</label>
            </div>
          </div>
        </div>


        <div className="menu-container">
          <h2>Seleccione una Habitación</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <input type="checkbox" id="opcion1" name="opcion1" />
              <label htmlFor="opcion1">H1</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H2</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H3</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H4</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H5</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H6</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H7</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H8</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H9</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H10</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H11</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H12</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H13</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H14</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H15</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H16</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H17</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H18</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H19</label>
            </div>
            <div className="menu-item">
              <input type="checkbox" id="opcion2" name="opcion2" />
              <label htmlFor="opcion2">H20</label>
            </div>
            
          </div>
        </div>

        

        <button className="form-button" type="submit">
          Alquilar
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
