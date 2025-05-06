import { ClientsTable } from "@/features/home";

const HomePage = () => {
  return (
    <>
      <section className="p-5 ">
        <h1 className="font-medium text-2xl">Resumen</h1>
          <article className="w-[100%] grid grid-cols-2 gap-4">
            <ClientsTable />
            <ClientsTable />
            <ClientsTable />
            <ClientsTable />
          </article>

      </section>
    </>
  )
}

export default HomePage;