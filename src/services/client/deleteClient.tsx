const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const deleteClient = async (clientId: string) => {

  const response = await fetch(`${baseUrl}/client/delete/${clientId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const data = await response.json()
  if(!response.ok) {
    throw new Error (data.message)
  }

  return data;
}

export default deleteClient;