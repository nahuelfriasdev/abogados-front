import { getCookie } from "./getCookie";
import { LawyerData } from "@/types/lawyer";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const getLawyer = async ( token?: string): Promise<LawyerData> => {
  const authToken = token || getCookie("authToken"); // Usa el token pasado como argumento o lo obtiene de las cookies
  if (!authToken) {
    throw new Error('No se encontró el token de autenticación');
  }
  const response = await fetch(`${baseUrl}/lawyer`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })

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