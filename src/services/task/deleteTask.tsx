
const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL_PRODUCTION;

const deleteTask = async(id:string) => {
  const response = await fetch(`${baseUrl}/task/delete/${id}` , {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await response.json()
  if(!response.ok) {
    throw new Error("Error al eliminar la tarea")
  }

  return data;
}

export default deleteTask;