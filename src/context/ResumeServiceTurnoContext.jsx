import { createContext, useContext, useState } from "react";
import {
  createResumeServiceTurnosRequest,
  getResumeServiceTurnosRequest,
} from "../api/resumeServiceTurnos";

const ResumeServiceTurnosContext = createContext();

export const useResumeServiceTurno = () => {
  const context = useContext(ResumeServiceTurnosContext);

  if (!context) {
    throw new Error("useService must be used within a TaskProvider");
  }
  return context;
};

export function ResumeServiceTurnoProvider({ children }) {
  const [resumeServiceTurnos, setResumeServiceTurno] = useState([]);


  const createResumeServiceTurnos = async (resumeServiceTurno) => {
    console.log(resumeServiceTurno);
    const res = await createResumeServiceTurnosRequest(resumeServiceTurno);
    console.log(res);
  };
  const getResumeServiceTurnos = async () => {
    try {
      const res = await getResumeServiceTurnosRequest();
      //   console.log(res);
      setResumeServiceTurno(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* const getServicesByTurno = async () => {
    try {
      const res = await getServicesByTurnoRequest();
      //   console.log(res);
      setServices(res.data);


    } catch (error) {
      console.log(error);
    }
  }; */
  return (
    <ResumeServiceTurnosContext.Provider
      value={{
        resumeServiceTurnos,
        createResumeServiceTurnos,
        getResumeServiceTurnos,
      }}
    >
      {children}
    </ResumeServiceTurnosContext.Provider>
  );
}
