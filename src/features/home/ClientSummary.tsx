import { Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ClientSummaryProps {
  totalClients: number
  newClients: number
}

export default function ClientSummary({ totalClients, newClients }: ClientSummaryProps) {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-slate-800">
          <Users className="h-5 w-5 text-blue-800" />
          Resumen de Clientes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-100 rounded-lg p-4">
            <p className="text-sm font-medium text-slate-600">Total de clientes</p>
            <p className="text-3xl font-bold text-slate-800 mt-1">{totalClients}</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm font-medium text-blue-800">Nuevos esta semana</p>
            <p className="text-3xl font-bold text-blue-800 mt-1">{newClients}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-blue-800 h-2 rounded-full"
              style={{ width: `${(newClients / totalClients) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {newClients} nuevos clientes representan el {((newClients / totalClients) * 100).toFixed(1)}% del total
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

