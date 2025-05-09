import getClients from "@/services/getClients"
import { getCookie } from "@/services/getCookie";
import { Client } from "@/types/client";
import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { createColumns } from "./colums";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import createClient from "@/services/createClient";
import deleteClientById from "@/services/deleteClientById";
import { useNavigate } from "react-router-dom";

const ClientTable = () => {
  const [clients, setClients] = useState<Client[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const token = getCookie("authToken");

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    dni: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    causeType: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    locality: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    fileNumber: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username : "",
      dni : "",
      phone : "",
      email : "",
      causeType : "",
      locality : "",
      fileNumber : "",
      description : ""
    },
  })

  const getClientsData = async () => {
    try {
      const data = await getClients();
      console.log(data)
      setClients(data);
    } catch (error){
      console.error('Error al obtener los clientes:', error)
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const client = {
        name: values.name,
        username: values.username,
        dni: values.dni,
        phone: values.phone,
        email: values.email,
        causeType: values.causeType,
        locality: values.locality,
        fileNumber: values.fileNumber,
        description: values.description
      }

      const data = await createClient(client)
      console.log(data)
      getClientsData();
      setIsMenuOpen(false)
    } catch (error) {
      console.error("Error al crear el cliente:", error)
    }
  }

  const handleDelete = async (id: string) => {
    await deleteClientById(id, getClientsData);
  }

  const Navigate = useNavigate();

  const handleNavigate = (id: string) => {
    Navigate(`../client/${id}`)
  }

  const columns = createColumns(handleDelete, handleNavigate);

  useEffect(() => {
    getClientsData();
  },[token])

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={clients} setIsMenuOpen={setIsMenuOpen} />
      </div>
  
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-3xl shadow-xl border border-gray-200 rounded-xl bg-white">
            <CardHeader className="pb-2 border-b">
              <CardTitle className="text-xl">Nuevo Cliente</CardTitle>
              <CardDescription>Completá los siguientes campos para registrar un nuevo cliente.</CardDescription>
            </CardHeader>
  
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
  
                    <FormField
                      control={form.control}
                      name="dni"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>DNI</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: 12345678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Celular</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: 11 2345 6789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
  
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: juan@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="causeType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Causa</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Laboral, Penal, etc." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
  
                    <FormField
                      control={form.control}
                      name="locality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Localidad</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: CABA, La Plata..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nº de Expediente</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: 1234/2024" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descripción</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Ej: Cliente demanda por despido injustificado..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
  
                  <div className="flex justify-end gap-4 pt-4 border-t">
                    <Button variant="outline" onClick={() => setIsMenuOpen(false)}>Cancelar</Button>
                    <Button type="submit">Crear Cliente</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
  
}

export default ClientTable