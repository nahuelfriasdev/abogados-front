import { ClientSummary, DashboardHeader, QuickAccess, TaskChecklist, UpcomingAppointments } from "@/features/home";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader
          userName="Dra. Frias"
          activitySummary="3 casos nuevos esta semana, 2 audiencias pendientes"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ClientSummary totalClients={128} newClients={5} />

          <TaskChecklist
            tasks={[
              { id: "1", title: "Preparar documentación para caso Rodríguez", completed: false, dueDate: "Hoy" },
              { id: "2", title: "Revisar contrato para Empresa ABC", completed: false, dueDate: "Mañana" },
              { id: "3", title: "Enviar notificación a cliente Gómez", completed: true, dueDate: "Completado" },
              { id: "4", title: "Actualizar expediente caso López", completed: false, dueDate: "En 2 días" },
              { id: "5", title: "Preparar facturación mensual", completed: false, dueDate: "Esta semana" },
            ]}
          />

          <UpcomingAppointments
            appointments={[
              {
                id: "1",
                client: "Carlos Rodríguez",
                purpose: "Consulta inicial",
                date: "Hoy, 14:30",
                location: "Oficina",
              },
              {
                id: "2",
                client: "María González",
                purpose: "Revisión de caso",
                date: "Mañana, 10:00",
                location: "Virtual",
              },
              {
                id: "3",
                client: "Empresa XYZ",
                purpose: "Firma de contrato",
                date: "Jueves, 16:00",
                location: "Oficina cliente",
              },
            ]}
          />

          <QuickAccess />
        </div>
      </div>
    </div>
  )
}

export default HomePage;