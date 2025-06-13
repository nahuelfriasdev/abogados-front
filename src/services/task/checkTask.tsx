import { Task } from "@/types/task";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL_PRODUCTION;

const checkTask = async (id:string, check:Task) => {
  const response = await fetch(`${baseUrl}/task/completed/${id}`,{
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
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