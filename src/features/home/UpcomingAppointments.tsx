import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Appointment {
  id: string
  client: string
  purpose: string
  date: string
  location: string
}

interface UpcomingAppointmentsProps {
  appointments: Appointment[]
}

export default function UpcomingAppointments({ appointments }: UpcomingAppointmentsProps) {
  return (
    <Card className="border-slate-200 shadow-sm relative">
      <p className="absolute top-[40%] right-[40%] uppercase font-semibold text-xl z-50">proximamente</p>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-slate-800">
          <Calendar className="h-5 w-5 text-blue-800" />
          Próximas Citas
        </CardTitle>
      </CardHeader>
      <CardContent className="blur-sm">
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-slate-800">{appointment.client}</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{appointment.date}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{appointment.purpose}</p>
              <div className="flex items-center mt-2 text-xs text-slate-500">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{appointment.location}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-800 hover:text-blue-900 font-medium">Ver agenda completa</button>
        </div>
      </CardContent>
    </Card>
  )
}
