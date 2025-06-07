import { useEffect } from "react";
import { Task } from "@/types/task";
import getAllTasks from "@/services/task/getAllTasks";

interface UseAllTask {
  setTask: (data: Task | null) => void; // Función para actualizar el estado
}

const useAllTask = ({ setTask }: UseAllTask) => {
  useEffect(() => {
    const fetchAllTask = async () => {
      try {
        const res = await getAllTasks();
        console.log(res)
        setTask(res);
      } catch (error) {
        console.error("No se pudo obtener la información del abogado", error);
        setTask(null); // Asegúrate de manejar errores limpiando el estado
      }
    };

    fetchAllTask(); // Llama a la función al montar el componente
  }, [setTask]); // Dependencia: se ejecuta si `setData` cambia
};

export default useAllTask;