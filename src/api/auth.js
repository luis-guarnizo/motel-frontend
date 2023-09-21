import axios from "./axios";


export const registerRequest = async (user) =>
  axios.post(`/register`, user);

export const loginRequest = async (user) => axios.post("/login", user);

export const logoutRequest = async () => axios.post("/logout");

//export const createRoomRequest = async (room) => axios.post("/rooms", room);

export const verifyTokenRequest = async () => axios.get("/verify");

