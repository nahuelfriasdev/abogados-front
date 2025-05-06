import { Client } from "@/types/client";
import { getCookie } from "./getCookie";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const getClients = async ( token?: string): Promise<Client[]> => {
  const authToken = token || getCookie("authToken"); // Usa el token pasado como argumento o lo obtiene de las cookies
  if (!authToken) {
    throw new Error('No se encontró el token de autenticación');
  }
  const response = await fetch(`${baseUrl}/client/clients`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })

  if(!response.ok) {
    throw new Error('Error al obtener los clientes')
  }

  const data = await response.json();

  if (data.error){
    throw new Error(data.Error)
  }
  return data.allClients;
}

export default getClients;