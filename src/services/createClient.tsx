import { Client } from "@/types/client";
import { getCookie } from "./getCookie";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const createClient = async ( client: Client, token?:string) => {
  const authToken = token || getCookie("authToken"); // Usa el token pasado como argumento o lo obtiene de las cookies
    if (!authToken) {
      throw new Error('No se encontró el token de autenticación');
    }
  const response = await fetch(`${baseUrl}/client/create-client`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(client)
  })
  const data = await response.json()
  if(!response.ok) {
    throw new Error(data.message)
  }

  return data;
}

export default createClient;