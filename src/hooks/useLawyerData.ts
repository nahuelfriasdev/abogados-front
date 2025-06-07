import { useEffect } from "react";
import getLawyer from "@/services/getLawyer";
import { LawyerData } from "@/types/lawyer";

interface UseLawyerDataProps {
  setData: (data: LawyerData | null) => void; // Función para actualizar el estado
}

const useLawyerData = ({ setData }: UseLawyerDataProps) => {
  useEffect(() => {
    const fetchLawyerData = async () => {
      try {
        const res = await getLawyer();
        console.log(res);
        setData(res); // Actualiza el estado con los datos del abogado
      } catch (error) {
        console.error("No se pudo obtener la información del abogado", error);
        setData(null); // Asegúrate de manejar errores limpiando el estado
      }
    };

    fetchLawyerData(); // Llama a la función al montar el componente
  }, [setData]); // Dependencia: se ejecuta si `setData` cambia
};

export default useLawyerData;