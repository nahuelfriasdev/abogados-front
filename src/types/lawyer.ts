export type Lawyer = {
  name: string; // Nombre completo del abogado
  folio: string; // Folio o número de registro en el colegio de abogados
  school: string; // Nombre del colegio de abogados (por ejemplo, "Buenos Aires Bar Association")
  license: string; // Número de licencia o matrícula
  address: string; // Dirección del bufete o despacho
  phone: string; // Número de teléfono
  email: string; // Dirección de correo electrónico
  tier: number;
};

export type LawyerData = {
  lawyer: Lawyer;
  amountClients: number;
}

// export type ClientDB = {
//   _id?: string;
//   userId?: string;
//   name: string;
//   username: string;
//   dni: string;
//   phone: string;
//   email: string;
//   causeType: string;
//   locality: string;
//   fileNumber: string;
//   description: string;
//   __v?: number;
// };