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

const buttonGuardarStyle = {
  backgroundColor: "#007BFF", // Color de fondo
  color: "white", // Color de texto
  border: "none", // Sin borde
  margin: "20px 0",
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

function SalesFormPage() {
  const { register, handleSubmit, control, reset, watch } = useForm();

  //const { services } = useServices();
  const { createSale } = useSales();
  const { getProducts, products } = useProducts();
  // console.log(tasks);

  //productos
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  // const [products, setProducts] = useState([]);

  //optener usuario

  const { user } = useAuth();

  useEffect(() => {
    getProducts();

    return () => {};

    // Establecemos la opción seleccionada inicialmente como la primera opción
  }, []);



  const handleAddProduct = async (data) => {
    const selectedProduct = products.find(
      (product) => product.name === data.productName
    );
    console.log('selected product')
    console.log(selectedProduct);

    if (selectedProduct) {
      const productToAdd = {
        _id: selectedProduct._id,
        name: selectedProduct.name,
        quantity: parseInt(data.quantity),
        price: selectedProduct.price,
        priceReception: selectedProduct.priceReception,
      };
      

      setSelectedProducts([...selectedProducts, productToAdd]);
      console.log('productos seleccionados')
      console.log(selectedProducts)
      reset(); // Utiliza reset para limpiar el formulario
    } else {
      console.error("Producto no encontrado en la lista de productos");
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes enviar la venta a la API con todos los datos recolectados
    const saleData = {
      sellerName: user.username,
      products: selectedProducts,
    };
    createSale(saleData);
    console.log("Venta a enviar a la API:", saleData);
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
            <h2>Prodcutos</h2>
            <Controller
              name="productName"
              control={control}
              render={({ field }) => (
                <div className="menu-grid" {...field}>
                  {products.map((product, index) => (
                    <div className="menu-item" key={index}>
                      <input
                      
                        type="radio"
                        id={"opcion-${index}"}
                        name={"opcion"}
                        value={product.name}
                        // {...register("productName")}
                        
                      />
                      <label htmlFor={"opcion-${index}"}>{product.name}</label>
                    </div>
                  ))}
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
              name="quantity"
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
        </form>
      </div>
    </>
  );
}

export default SalesFormPage;
