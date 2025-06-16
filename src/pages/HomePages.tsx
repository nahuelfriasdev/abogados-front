import { ClientSummary, DashboardHeader, QuickAccess, TaskChecklist, UpcomingAppointments } from "@/features/home";
import useAllTask from "@/hooks/useAllTask";
import useLawyerData from "@/hooks/useLawyerData";
import { LawyerData } from "@/types/lawyer";
import { Task } from "@/types/task";
import { useState } from "react";

const HomePage = () => {
  const [data, setData] = useState<LawyerData | null>(null);
  const [task, setTask] = useState<Task | Task[] | null>(null);


  useLawyerData({ setData });
  useAllTask({ setTask });
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader
          userName={data?.lawyer.name || "Cargando..."}
          activitySummary="3 casos nuevos esta semana, 2 audiencias pendientes"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ClientSummary totalClients={data?.amountClients || 0} newClients={data?.amountClients || 0} />

          <TaskChecklist
            tasks={Array.isArray(task) ? task : task ? [task] : []}
            setTask={setTask}
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