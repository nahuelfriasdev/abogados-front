import { Client } from "@/types/client";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const createClient = async ( client: Client) => {
  const response = await fetch(`${baseUrl}/client/create-client`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
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