import { TaskDB } from "@/types/task";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const createTask = async (task:TaskDB) => {
  const response = await fetch(`${baseUrl}/task/create-task`, {
    method: "POST",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
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