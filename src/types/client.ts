export type Client = {
  userId?: string;
  name: string;
  username: string;
  dni: string;
  phone: string;
  email: string;
  causeType: string;
  locality: string;
  fileNumber: string;
  description: string;
};

export type ClientDB = {
  _id?: string;
  userId?: string;
  name: string;
  username: string;
  dni: string;
  phone: string;
  email: string;
  causeType: string;
  locality: string;
  fileNumber: string;
  description: string;
  __v?: number;
};