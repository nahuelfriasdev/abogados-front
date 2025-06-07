import { getCookie } from "../getCookie";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const getAllTasks = async (token?: string) => {
  const authToken = token || getCookie("authToken");
    if (!authToken) {
      throw new Error('No se encontró el token de autenticación');
    }

  const response = await fetch(`${baseUrl}/task`, {
    method: 'GET',
    headers:{
      'content-type': 'application/json',
      'Authorization': `Bearer ${authToken}`
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