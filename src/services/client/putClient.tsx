import { Client } from "@/types/client";
import { getCookie } from "../getCookie";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL_PRODUCTION;

const putClient = async (id: string, client:Client, token?: string) => {
  const authToken = token || getCookie("authToken");
    if (!authToken) {
      throw new Error('No se encontró el token de autenticación');
    }
  const response = await fetch (`${baseUrl}/client/edit/${id}` , {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify(client)
  })

  const data = await response.json()

  if (!response.ok) throw new Error("Error al actualizar el perfil")

  return data;
}

export default putClient;