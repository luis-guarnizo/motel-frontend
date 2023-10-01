import { useEffect, useState } from "react";
import { useServices } from "../../context/ServiceContext";
import { useResumeServiceTurno } from "../../context/ResumeServiceTurnoContext";
import { useSales } from "../../context/SaleContext";
import { useAuth } from "../../context/AuthContext";

import { useForm } from "react-hook-form";

import { useParams, Link } from "react-router-dom";

import "./Sales.css";

function SalesPage() {
  const { getSales, sales } = useSales();

  const { user } = useAuth();

  // const { register, handleSubmit } = useForm();

  useEffect(() => {
    getSales();

    console.log(sales);

    return () => {};
  }, []);

  return (
    <>
      <div className="form-container">
        <h2>Tabla de Productos</h2>

        <table>
          <thead>
            <tr>
              <th>Vendedor</th>
              <th>Total venta</th>
              <th>Productos</th>
            </tr>
          </thead>
          <tbody>
            {sales?.map((sale) => (
              <tr key={sale._id}>
                <td>{sale.sellerName}</td>
                <td>
                  {sale.totalAmount.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </td>
                <td>
                  {
                    <ul className="product-list">
                      {sale.products.map((product) => (
                        <li key={product._id} className="product-item">
                          <span className="product-name">{product.name}</span> -{" "}
                          <span className="product-quantity">
                            Cantidad: {product.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SalesPage;
