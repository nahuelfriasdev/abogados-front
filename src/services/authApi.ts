const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const authApi = async (email: string, password: string) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    credentials: "include", // 👈 necesario para que el backend pueda setear la cookie
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error en la autenticación");
  }

  return true;
};

export default authApi;