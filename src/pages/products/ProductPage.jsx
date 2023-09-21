import { useEffect, useState } from "react";
import { useServices } from "../../context/ServiceContext";
import { useResumeServiceTurno } from "../../context/ResumeServiceTurnoContext";
import { useProducts } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";

import { useForm } from "react-hook-form";

import { useParams, Link } from "react-router-dom";

import "./Products.css";


function ProductPage() {
  const { getProducts, createProduct, products } = useProducts();

  const { user } = useAuth();

  const params = useParams();

  const { register, handleSubmit } = useForm();
  const handleBtnEditClick = () => {
    console.log("editar");
  };

  const handleBtnDeleteClick = () => {
    console.log("eliminar");
  };

  useEffect(() => {
    getProducts();

    console.log(products);

    return () => {};
  }, []);

  return (
    <>
      <div className="form-container">
        <h2>Tabla de Productos</h2>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Precio Recep.</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((producto) => (
              <tr key={producto._id}>
                <td>{producto.name}</td>
                <td>{producto.quantity}</td>
                <td>
                  {producto.price.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </td>
                <td>
                  {producto.priceReception.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </td>
                <td>
                  <div>
                    <Link to={`/products/${producto._id}`} className="button-link">
                      Editar
                    </Link>
                    <button
                      onClick={() => {
                        console.log(producto._id);
                      }}
                      className="button-common red-bg"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductPage;
