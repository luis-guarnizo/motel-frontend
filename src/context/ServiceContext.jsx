import { createContext, useContext, useState } from "react";
import { createServiceRequest, getServicesRequest } from "../api/services";

const ServiceContext = createContext();

export const useServices = () => {
  const context = useContext(ServiceContext);

  if (!context) {
    throw new Error("useService must be used within a TaskProvider");
  }
  return context;
};

export function ServiceProvider({ children }) {
  const [services, setServices] = useState([]);

  const createService = async (service) => {
    console.log(service);
    const res = await createServiceRequest(service);
    console.log(res);
  };
  const getServices = async () => {
    try {
      const res = await getServicesRequest();
      //   console.log(res);
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ServiceContext.Provider
      value={{
        services,
        createService,
        getServices,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
