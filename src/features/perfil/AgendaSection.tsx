"use client"

import { Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

type Event = {
  id: string
  title: string
  type: "audiencia" | "cita" | "vencimiento"
  date: Date
  time: string
  location?: string
}

export default function AgendaSection() {
  // En una aplicación real, estos datos vendrían de una API o base de datos
  const events: Event[] = [
    {
      id: "1",
      title: "Audiencia preliminar",
      type: "audiencia",
      date: new Date(2023, 5, 15),
      time: "10:00",
      location: "Juzgado Civil Nº 5, Sala 3",
    },
    {
      id: "2",
      title: "Reunión con cliente",
      type: "cita",
      date: new Date(2023, 5, 18),
      time: "16:30",
      location: "Despacho principal",
    },
    {
      id: "3",
      title: "Vencimiento plazo presentación",
      type: "vencimiento",
      date: new Date(2023, 5, 25),
      time: "23:59",
    },
    {
      id: "4",
      title: "Audiencia testimonial",
      type: "audiencia",
      date: new Date(2023, 6, 2),
      time: "09:15",
      location: "Juzgado Civil Nº 5, Sala 2",
    },
  ]

  // Ordenar eventos por fecha
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime())

  // Función para obtener el color según el tipo de evento
  const getEventColor = (type: Event["type"]) => {
    switch (type) {
      case "audiencia":
        return "bg-blue-50 text-blue-500"
      case "cita":
        return "bg-green-50 text-green-500"
      case "vencimiento":
        return "bg-amber-50 text-amber-500"
      default:
        return "bg-gray-50 text-gray-500"
    }
  }

  // Función para obtener el nombre del tipo de evento
  const getEventTypeName = (type: Event["type"]) => {
    switch (type) {
      case "audiencia":
        return "Audiencia"
      case "cita":
        return "Cita"
      case "vencimiento":
        return "Vencimiento"
      default:
        return "Evento"
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">Agenda</h2>

        <Button disabled variant="outline" size="sm" className="h-8 text-gray-500">
          Ver calendario
        </Button>
      </div>

     <div className="relative">
        <p className="absolute top-[40%] right-[40%] uppercase font-semibold text-xl">proximamente</p>

        <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2 blur-sm">
          {sortedEvents.map((event) => (
            <div key={event.id} className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getEventColor(event.type)}`}>
                  {getEventTypeName(event.type)}
                </span>
                <span className="text-xs text-gray-500">{event.date.toLocaleDateString()}</span>
              </div>

              <h3 className="text-sm font-medium text-gray-800 mb-2">{event.title}</h3>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  <span>{event.time}</span>
                </div>

                {event.location && (
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="h-3.5 w-3.5 mr-1.5" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
     </div>


    </div>
  )
}
