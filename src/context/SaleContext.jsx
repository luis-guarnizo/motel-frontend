import { createContext, useContext, useState } from "react";
import {
  createSaleAdminRequest,
  createSaleReceptionRequest,
  createSaleClientRequest,
  getSaleRequest,
  getSalesRequest,
  updateSaleRequest,
} from "../api/sales";

const SaleContext = createContext();

export const useSales = () => {
  const context = useContext(SaleContext);

  if (!context) {
    throw new Error("useService must be used within a TaskProvider");
  }
  return context;
};

export function SaleProvider({ children }) {
  const [sales, setSales] = useState([]);

  const createSaleAdmin = async (sale) => {
    console.log(sale);
    const res = await createSaleAdminRequest(sale);
    console.log(res);
  };

  const createSaleReception = async (sale) => {
    console.log(sale);
    const res = await createSaleReceptionRequest(sale);
    console.log(res);
  };

  const createSaleClient = async (sale) => {
    console.log(sale);
    const res = await createSaleClientRequest(sale);
    console.log(res);
  };
  const getSales = async () => {
    try {
      const res = await getSalesRequest();
      //   console.log(res);
      setSales(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSale = async (id, sale) => {
    try {
      const res = await updateSaleRequest(id, sale);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getSale = async (id) => {
    try {
      const res = await getSaleRequest(id);
      console.log(res);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SaleContext.Provider
      value={{
        sales,
        createSaleAdmin,
        createSaleClient,
        createSaleReception,
        getSales,
        getSale,
        updateSale,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
}
