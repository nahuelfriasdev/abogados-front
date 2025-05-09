import { getCookie } from "./getCookie";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const getClient = async( id?: string , token?: string) => {
  const authToken = token || getCookie("authToken"); // Usa el token pasado como argumento o lo obtiene de las cookies
    if (!authToken) {
      throw new Error('No se encontró el token de autenticación');
    }
  const response = await fetch(`${baseUrl}/client/get/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json();
  if(data.error) {
    throw new Error(data.error)
  }

  return data.clientProfile

}

export default getClient;