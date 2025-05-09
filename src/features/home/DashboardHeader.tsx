import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardHeaderProps {
  userName: string
  activitySummary: string
}

export default function DashboardHeader({ userName, activitySummary }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Bienvenido, {userName}</h1>
        <p className="text-slate-600 mt-1">{activitySummary}</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </Button>
        <Button className="bg-blue-800 hover:bg-blue-900">Nuevo caso</Button>
      </div>
    </div>
  )
}
