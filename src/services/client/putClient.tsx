import { Client } from "@/types/client";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL_PRODUCTION;

const putClient = async (id: string, client:Client) => {
  const response = await fetch (`${baseUrl}/client/edit/${id}` , {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(client)
  })

  const data = await response.json()

  if (!response.ok) throw new Error("Error al actualizar el perfil")

  return data;
}

export default putClient;