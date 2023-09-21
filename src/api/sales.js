import axios from "./axios";

export const getSaleRequest = async () => axios.get("/sales");

export const createSaleRequest = async (sale) => axios.post("/sales", sale);

export const getServiceRequest = async (id) => axios.get(`/services/${id}`);