import { TaskDB } from "@/types/task";
import { getCookie } from "../getCookie";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const createTask = async (task:TaskDB, token?: string) => {
  const authToken = token || getCookie("authToken");
    if (!authToken) {
      throw new Error('No se encontró el token de autenticación');
    }

  const response = await fetch(`${baseUrl}/task/create-task`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body:  JSON.stringify(task)
  })
  const data = await response.json()
  if(!response.ok) {
    throw new Error("Error al crear la tarea")
  }

  return data;
}

export default createTask;