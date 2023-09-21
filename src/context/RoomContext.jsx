import { createContext, useContext, useState } from "react";
import {
  createRoomRequest,
  getRoomsRequest,
  getRoomRequest,
  deleteRoomRequest,
  updateRoomRequest,
} from "../api/rooms";

const RoomContext = createContext();

export const useRooms = () => {
  const context = useContext(RoomContext);

  if (!context) {
    throw new Error("useRoom must be used within a TaskProvider");
  }
  return context;
};

export function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState([]);

  const createRoom = async (room) => {
    console.log("room");
    const res = await createRoomRequest(room);
    console.log(res);
  };
  const getRooms = async () => {
    try {
      const res = await getRoomsRequest();
      console.log(res.data);
      setRooms(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRoom = async (id) => {
    try {
      const res = await getRoomRequest(id);
      console.log(res);
      setRoom(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteRoom = async (id) => {
    const res = await deleteRoomRequest(id);
    console.log(res.data);
  };
  const updateRoom = async (id, room) => {
    try {
      const res = await updateRoomRequest(id, room);
      console.log(res.data);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        room,
        createRoom,
        getRooms,
        getRoom,
        deleteRoom,
        updateRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
