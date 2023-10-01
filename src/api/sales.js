import axios from "./axios";

export const getSalesRequest = async () => axios.get("/sales");

export const createSaleAdminRequest = async (sale) => axios.post("/sales/admin", sale);
export const createSaleReceptionRequest = async (sale) => axios.post("/sales/reception", sale);
export const createSaleClientRequest = async (sale) => axios.post("/sales/client", sale);

export const updateSaleRequest = async (id, sale) =>
  axios.put(`/sales/${id}`, sale);

export const deleteSaleRequest = async (id) => axios.delete(`/sales/${id}`);

export const getSaleRequest = async (id) => axios.get(`/sales/${id}`);