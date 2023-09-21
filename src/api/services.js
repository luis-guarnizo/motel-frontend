import axios from "./axios";

export const getServicesRequest = async () => axios.get("/services");

export const getServicesByTurnoRequest = async () => axios.get("/servicesByTurno");



export const createServiceRequest = async (service) => axios.post("/services", service);

export const updateServiceRequest = async (service) =>
  axios.put(`/services/${service._id}`, service);

export const deleteServiceRequest = async (id) => axios.delete(`/services/${id}`);

export const getServiceRequest = async (id) => axios.get(`/services/${id}`);