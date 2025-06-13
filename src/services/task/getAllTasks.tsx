
const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const getAllTasks = async () => {
  const response = await fetch(`${baseUrl}/task`, {
    method: 'GET',
    credentials: 'include',
    headers:{
      'content-type': 'application/json',
    }
  });
  if(!response.ok){
    throw new Error("Error al obtener las tareas")
  } 

  const data = await response.json();
  if (data.error){
    throw new Error(data.Error)
  }
  return data.allTask;
}

export default getAllTasks;