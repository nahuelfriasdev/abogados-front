import { ClientTable } from "@/features/clients"

const ClientsPages = () => {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Clientes</h1>
        <p className="text-muted-foreground mt-2">
          Administrá y gestioná tus clientes desde aquí. Podés buscar, crear y ver sus perfiles fácilmente.
        </p>
      </div>

      <ClientTable />
    </section>
  )
}

export default ClientsPages
