import { useEffect, useState } from "react";
import { useServices } from "../../context/ServiceContext";
import { useResumeServiceTurno } from "../../context/ResumeServiceTurnoContext";
import { useProducts } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";

import { useForm } from "react-hook-form";

import { useParams, useNavigate } from "react-router-dom";

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

function AddProductPage() {
  const { getProducts, getProduct, createProduct, products, updateProduct } = useProducts();

  const { user } = useAuth();

  const { register, handleSubmit, setValue } = useForm();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(params);
    async function loadProduct() {
      if (params.id) {
        const product = await getProduct(params.id);
        console.log(product);
        setValue("name", product.name);
        setValue("quantity", product.quantity);
        setValue("price", product.price);
        setValue("priceReception", product.priceReception);
      }
    }
    loadProduct();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateProduct(params.id, data)
    } else {
      console.log(data);
      createProduct(data);
      
    }
    navigate("/products");
  });

  return (
    <>
      <div className="form-container">
        <div style={containerStyle}>
          <div className="modal">
            <div className="modal-contenido">
              <h2>Ingrese Producto:</h2>
              <form onSubmit={onSubmit}>
                {/* Aquí coloca los campos del formulario */}
                <label>
                  Nombre:
                  <input
                    style={inputTotalTecogidoStyle}
                    type="text"
                    id="name"
                    name="name"
                    {...register("name")}
                  />
                </label>

                <label>
                  Cantidad:
                  <input
                    style={inputTotalTecogidoStyle}
                    type="text"
                    id="cantidad"
                    name="cantidad"
                    {...register("quantity")}
                  />
                </label>

                {user.role == "admin" && (
                  <label>
                    Precio:
                    <input
                      style={inputTotalTecogidoStyle}
                      type="text"
                      id="price"
                      name="price"
                      {...register("price")}
                    />
                  </label>
                )}

                {user.role == "admin" && (
                  <label>
                    Precio Recepcionista:
                    <input
                      style={inputTotalTecogidoStyle}
                      type="text"
                      id="priceReception"
                      name="priceReception"
                      {...register("priceReception")}
                    />
                  </label>
                )}

                {/* Otros campos del formulario */}
                <button type="submit" style={buttonConfirmarStyle}>
                  Agregar producto
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProductPage;
