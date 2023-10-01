import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRooms } from "../../context/RoomContext";
import { useServices } from "../../context/ServiceContext";
import { useSales } from "../../context/SaleContext";
import { useProducts } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import "./SaleFormPage.css";

//estilos
const buttonAgregarStyle = {
  backgroundColor: "#008000", // Color de fondo
  color: "white", // Color de texto
  border: "none", // Sin borde
  margin: "20px 0",
  padding: "10px 20px", // Espacio interno de los botones
  fontSize: "16px", // Tamaño de fuente
  borderRadius: "5px", // Bordes redondeados
  cursor: "pointer", // Cambia el cursor al pasar sobre el botón
};
const buttonCancelarStyle = {
  backgroundColor: "#F00", // Color de fondo
  color: "white", // Color de texto
  border: "none", // Sin borde
  margin: "20px 10px",
  padding: "10px 20px", // Espacio interno de los botones
  fontSize: "16px", // Tamaño de fuente
  borderRadius: "5px", // Bordes redondeados
  cursor: "pointer", // Cambia el cursor al pasar sobre el botón
};

const buttonGuardarStyle = {
  backgroundColor: "#007BFF", // Color de fondo
  color: "white", // Color de texto
  border: "none", // Sin borde
  margin: "20px 10px",
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

let productQuantity = 0;

function SalesFormPage() {
  const { register, handleSubmit, control, reset, watch } = useForm();

  //const { services } = useServices();
  const { createSaleAdmin, createSaleReception, createSaleClient } = useSales();
  const { getProducts, products } = useProducts();
  // console.log(tasks);

  //productos
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  // const [products, setProducts] = useState([]);

  //optener usuario

  const { user } = useAuth();

  const [tipoClientes, setTipoClientes] = useState([]);
  

  useEffect(() => {
    getProducts();
    user.role == "admin"
      ? setTipoClientes(["Admin", "Recepcion", "Cliente"])
      : setTipoClientes(["Recepcion", "Cliente"]);

    return () => {};

    // Establecemos la opción seleccionada inicialmente como la primera opción
  }, []);

  const handleAddProduct = async (data) => {
    const selectedProduct = products.find(
      (product) => product.name === data.productName
    );
    // console.log("selected product");
    // console.log(selectedProduct);

    data.quantity1 ? (productQuantity = data.quantity1) : productQuantity;
    data.quantity2 ? (productQuantity = data.quantity2) : productQuantity;
    data.quantity3 ? (productQuantity = data.quantity3) : productQuantity;
    data.quantity4 ? (productQuantity = data.quantity4) : productQuantity;

    if (selectedProduct) {
      const productToAdd = {
        _id: selectedProduct._id,
        name: selectedProduct.name,
        category: selectedProduct.category,
        quantity: parseInt(productQuantity),
        price: selectedProduct.price,
        priceReception: selectedProduct.priceReception,
      };

      setSelectedProducts([...selectedProducts, productToAdd]);
      // console.log(data.clientType)
      // console.log("productos seleccionados");
      // console.log(selectedProducts);
      reset(); // Utiliza reset para limpiar el formulario
    } else {
      console.error("Producto no encontrado en la lista de productos");
    }
  };
  const handleCancelSale = async () => {
     // Limpiar el formulario utilizando reset de react-hook-form
     reset();

     // Restablecer el estado de los productos seleccionados a un arreglo vacío
     setSelectedProducts([]);
     // Recargar la página actual
    window.location.reload();
  };

  const onSubmit = (data) => {
    console.log("data");
    console.log(data);
    const saleData = {
      sellerName: user.username,
      products: selectedProducts,
    };
    console.log(data.clientType);
    switch (data.clientType) {
      case "Admin":
        console.log("Soy admin");
        // Aquí puedes enviar la venta a la API con todos los datos recolectados

        createSaleAdmin(saleData);
        break;
      case "Recepcion":
        console.log("Soy Recepcion");
        createSaleReception(saleData);
        break;
      case "Cliente":
        console.log("Soy Cliente");
        createSaleClient(saleData);
        break;

      default:
        break;
    }

    // console.log("Venta a enviar a la API:", saleData);
    //console.log(saleData);
  };

  return (
    <>
      <div className="form-container">
        <h2>Crear una Venta</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div>
            <label>Nombre del Vendedor:</label>
            <input
              type="text"
              onChange={handleSellerNameChange}
              {...register("sellerName")}
              style={inputTotalTecogidoStyle}
            />
          </div> */}

          <div className="menu-container">
            <h2>Bebidas</h2>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <div className="menu-grid" {...field}>
                  {products.map((product, index) =>
                    product.category == "bebidas" ? (
                      <div className="menu-item" key={index}>
                        <input
                          type="radio"
                          id={"product-${index}"}
                          name={"product"}
                          value={product.name}
                          // {...register("productName")}
                        />
                        <label htmlFor={"product-${index}"}>
                          {product.name}
                        </label>
                      </div>
                    ) : null
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <label>Cantidad:</label>
            <Controller
              name="quantity1"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  style={inputTotalTecogidoStyle}
                />
              )}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit(handleAddProduct)}
            style={buttonAgregarStyle}
          >
            Agregar Producto
          </button>

          <div className="menu-container">
            <h2>Comida</h2>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <div className="menu-grid" {...field}>
                  {products.map((product, index) =>
                    product.category == "comida" ? (
                      <div className="menu-item" key={index}>
                        <input
                          type="radio"
                          id={"product-${index}"}
                          name={"product"}
                          value={product.name}
                          // {...register("productName")}
                        />
                        <label htmlFor={"product-${index}"}>
                          {product.name}
                        </label>
                      </div>
                    ) : null
                  )}
                </div>
              )}
            />
          </div>

          {/* <div>
            <label>Selecciona un Producto:</label>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <select {...field}>
                  <option value="">Selecciona un producto</option>
                  {products?.map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
                </select>
              )}
            />
          </div> */}
          <div>
            <label>Cantidad:</label>
            <Controller
              name="quantity2"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  style={inputTotalTecogidoStyle}
                />
              )}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit(handleAddProduct)}
            style={buttonAgregarStyle}
          >
            Agregar Producto
          </button>

          <div className="menu-container">
            <h2>Eróticos</h2>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <div className="menu-grid" {...field}>
                  {products.map((product, index) =>
                    product.category == "eroticos" ? (
                      <div className="menu-item" key={index}>
                        <input
                          type="radio"
                          id={"product-${index}"}
                          name={"product"}
                          value={product.name}
                          // {...register("productName")}
                        />
                        <label htmlFor={"product-${index}"}>
                          {product.name}
                        </label>
                      </div>
                    ) : null
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <label>Cantidad:</label>
            <Controller
              name="quantity3"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  style={inputTotalTecogidoStyle}
                />
              )}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit(handleAddProduct)}
            style={buttonAgregarStyle}
          >
            Agregar Producto
          </button>

          <div className="menu-container">
            <h2>Otros</h2>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <div className="menu-grid" {...field}>
                  {products.map((product, index) =>
                    product.category == "otros" ? (
                      <div className="menu-item" key={index}>
                        <input
                          type="radio"
                          id={"product-${index}"}
                          name={"product"}
                          value={product.name}
                          // {...register("productName")}
                        />
                        <label htmlFor={"product-${index}"}>
                          {product.name}
                        </label>
                      </div>
                    ) : null
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <label>Cantidad:</label>
            <Controller
              name="quantity4"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  style={inputTotalTecogidoStyle}
                />
              )}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit(handleAddProduct)}
            style={buttonAgregarStyle}
          >
            Agregar Producto
          </button>

          <div className="menu-container">
            <h2>Tipo de Cliente</h2>
            <Controller
              name="clientType"
              control={control}
              render={({ field }) => (
                <div className="menu-grid" {...field}>
                  {tipoClientes.map((cliente, index) => (
                    <div className="menu-item" key={index}>
                      <input
                        type="radio"
                        id={"cliente-${index}"}
                        name={"cliente"}
                        value={cliente}
                        // {...register("productName")}
                      />
                      <label htmlFor={"cliente-${index}"}>{cliente}</label>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>

          <div>
            <h3>Productos Seleccionados:</h3>
            <ul>
              {selectedProducts.map((product, index) => (
                <li key={product._id}>
                  {product.name} - Cantidad: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
          <button type="submit" style={buttonGuardarStyle}>
            Guardar Venta
          </button>
          <button
            type="button"
            onClick={handleCancelSale}
            style={buttonCancelarStyle}
          >
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
}

export default SalesFormPage;
