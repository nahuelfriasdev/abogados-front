import { LawyerData } from "@/types/lawyer";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const getLawyer = async (): Promise<LawyerData> => {
  const response = await fetch(`${baseUrl}/lawyer`, {
    method: 'GET',
    credentials: 'include', // 👈 importante para enviar la cookie al backend
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if(!response.ok) {
    throw new Error('Error al obtener los datos del abogado')
  }

  const data = await response.json();

  if (data.error){
    throw new Error(data.Error)
  }
  return data;
}

export default getLawyer;