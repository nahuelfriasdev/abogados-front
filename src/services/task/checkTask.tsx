import { Task } from "@/types/task";
import { getCookie } from "../getCookie";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL_PRODUCTION;

const checkTask = async (id:string, check:Task, token?:string) => {
  const authToken = token || getCookie("authToken");
  if (!authToken) {
    throw new Error('No se encontró el token de autenticación');
  }

  const response = await fetch(`${baseUrl}/task/completed/${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `barer ${authToken}`
    },
    body: JSON.stringify(check)
  })

  const data = response.json()

  if(!response.ok) {
    throw new Error("Error al checkear la tarea")
  }

  return data;

}

export default checkTask;