const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const authApi = async (email:string, password:string) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    }),
  })
  if (!response.ok) {
    throw new Error("Error en la autenticación")
  }
  const data = await response.json()
  const token = data.token;
  document.cookie = `authToken=${token}; path=/; max-age=3600; secure; SameSite=Strict`;
  if (data.error) {
    throw new Error(data.error)
  }
  return token;
}

export default authApi;