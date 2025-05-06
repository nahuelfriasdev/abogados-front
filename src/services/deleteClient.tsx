import { getCookie } from "./getCookie"

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const deleteClient = async (clientId: string, token?: string) => {
  const authToken = token || getCookie("authToken");
  if (!authToken) {
    throw new Error('No se encontró el token de autenticación');
  }

  const response = await fetch(`${baseUrl}/client/delete/${clientId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `barer ${authToken}`
    }
  })

  const data = await response.json()
  if(!response.ok) {
    throw new Error (data.message)
  }

  return data;
}

export default deleteClient;