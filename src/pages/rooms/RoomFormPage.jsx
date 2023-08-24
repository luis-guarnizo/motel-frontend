import { useForm, } from "react-hook-form";
import { useRooms } from "../../context/RoomContext";

function RoomFormPage() {
  const { register, handleSubmit } = useForm();
  
  const { rooms } = useRooms();
  const { createRoom } = useRooms();
  // console.log(tasks);

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    createRoom(data);
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="Número de Habitación"
          {...register("roomNumber")}
          autoFocus
        />

        <input
          type="checkbox"
          placeholder="Disponibilidad"
          {...register("availability")}
        ></input>
        <button>Save</button>
      </form>
    </div>
  );
}

export default RoomFormPage;
