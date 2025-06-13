import { Client } from "@/types/client";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const getClients = async (): Promise<Client[]> => {
  const response = await fetch(`${baseUrl}/client/clients`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'content-type': 'application/json',
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