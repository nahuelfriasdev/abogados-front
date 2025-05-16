import { getCookie } from "../getCookie";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL_PRODUCTION;

const deleteTask = async(id:string, token?:string) => {
  const authToken = token || getCookie("authToken");
    if (!authToken) {
      throw new Error('No se encontró el token de autenticación');
    }

  const response = await fetch(`${baseUrl}/task/delete/${id}` , {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `barer ${authToken}`
    }
  })
  const data = await response.json()
  if(!response.ok) {
    throw new Error("Error al eliminar la tarea")
  }

  return data;
}

export default deleteTask;