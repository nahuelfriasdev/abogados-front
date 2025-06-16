import { MailerContact } from "@/types/mailer";

const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL // Usa la URL local en desarrollo
    : import.meta.env.VITE_API_URL_PRODUCTION;

const mailerContact = async (formData: MailerContact) => {
  const response = await fetch(`${baseUrl}/mailer/contact`, {
    method: 'POST',
    credentials: 'include',
    headers:{
      'content-type': 'application/json',
    },
    body: JSON.stringify(formData)
  });
  if(!response.ok){
    throw new Error("Error al enviar el email")
  } 

  const data = await response.json();
  if (data.error){
    throw new Error(data.Error)
  }
  return data;
}

export default mailerContact;