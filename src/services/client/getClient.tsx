const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const getClient = async( id?: string) => {
  const response = await fetch(`${baseUrl}/client/get/${id}`, {
    method: 'GET',
    credentials: 'include',
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