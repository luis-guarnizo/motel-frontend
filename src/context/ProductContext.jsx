import { createContext, useContext, useState } from "react";
import {
  createProductRequest,
  getProductsRequest,
  updateProductRequest,
  getProductRequest,
} from "../api/products";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useService must be used within a TaskProvider");
  }
  return context;
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const createProduct = async (product) => {
    console.log(product);
    const res = await createProductRequest(product);
    console.log(res);
  };
  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      //   console.log(res);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const res = await updateProductRequest(id, product);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getProduct = async (id) => {
    try {
      const res = await getProductRequest(id);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        getProducts,
        updateProduct,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
