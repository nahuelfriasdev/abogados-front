import deleteClient from "./deleteClient";

const deleteClientById = async (
  clientId: string,
  onSuccess?: () => void // Callback opcional para actualizar la UI
) => {
  if (clientId === "0") {
    alert("No se puede eliminar el cliente");
    return;
  }

  try {
    const response = await deleteClient(clientId); // Llama al servicio
    if (response.message === "Cliente eliminado con éxito") {
      alert("Cliente eliminado con éxito");

      // Si se proporciona un callback, llámalo para actualizar la UI
      if (onSuccess) {
        onSuccess();
      }
    } else {
      alert("Error al eliminar el cliente");
    }
  } catch (error) {
    console.error("Error al eliminar el cliente:", error);
    alert("Error al eliminar el cliente");
  }
};

export default deleteClientById;