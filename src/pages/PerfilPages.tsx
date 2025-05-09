import { AgendaSection, ClientInfo, DocumentSection, TaskList } from "@/features/perfil"

const PerfilPages = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Perfil del Cliente</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bloque superior izquierdo - Datos del cliente */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <ClientInfo />
        </div>

        {/* Bloque superior derecho - Lista de tareas */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <TaskList />
        </div>

        {/* Bloque inferior izquierdo - Documentos */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <DocumentSection />
        </div>

        {/* Bloque inferior derecho - Agenda */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <AgendaSection />
        </div>
      </div>
    </div>
  )
}

export default PerfilPages;