import { createContext, useContext, useState } from "react";
import {
  createSaleRequest,
  getSaleRequest
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


  const createSale = async (sale) => {
    console.log(sale);
    const res = await createSaleRequest(sale);
    console.log(res);
  };

  const getSales = async () => {
    try {
      const res = await getSaleRequest();
      //   console.log(res);
      setSales(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <SaleContext.Provider
      value={{
        sales,
        createSale,
        getSales,        
      }}
    >
      {children}
    </SaleContext.Provider>
  );
}
