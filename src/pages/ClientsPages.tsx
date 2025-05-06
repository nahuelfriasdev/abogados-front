import { ClientTable } from "@/features/clients"

const ClientsPages = () => {
  return (
    <>
      <section>
        <h1 className="text-center text-3xl mb-10">INICIO</h1>
        <ClientTable />
      </section>
    </>
  )
}

export default ClientsPages;