import axios from "./axios";

export const getResumeServiceTurnosRequest = async () => axios.get("/resumeServiceTurnos");

/* export const getServicesByTurnoRequest = async () => axios.get("/servicesByTurno"); */



export const createResumeServiceTurnosRequest = async (resumeServiceTurno) => axios.post("/resumeServiceTurnos", resumeServiceTurno);

/* export const updateServiceRequest = async (service) =>
  axios.put(`/services/${service._id}`, service);

export const deleteServiceRequest = async (id) => axios.delete(`/services/${id}`);

export const getServiceRequest = async (id) => axios.get(`/services/${id}`); */