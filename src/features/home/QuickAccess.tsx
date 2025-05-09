import type React from "react"
import { FileText, Plus, Calendar, Upload } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuickAccess() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2 text-slate-800">
          <FileText className="h-5 w-5 text-blue-800" />
          Accesos Rápidos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <QuickAccessButton
            icon={<Plus className="h-5 w-5" />}
            label="Crear Cliente"
            description="Registrar nuevo cliente"
          />
          <QuickAccessButton
            icon={<Upload className="h-5 w-5" />}
            label="Subir Documento"
            description="Añadir al expediente"
          />
          <QuickAccessButton
            icon={<Calendar className="h-5 w-5" />}
            label="Ver Agenda"
            description="Calendario completo"
          />
          <QuickAccessButton
            icon={<FileText className="h-5 w-5" />}
            label="Generar Informe"
            description="Reportes y estadísticas"
          />
        </div>
      </CardContent>
    </Card>
  )
}

interface QuickAccessButtonProps {
  icon: React.ReactNode
  label: string
  description: string
}

function QuickAccessButton({ icon, label, description }: QuickAccessButtonProps) {
  return (
    <button className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-100 transition-colors">
      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mb-2">
        {icon}
      </div>
      <span className="font-medium text-sm text-slate-800">{label}</span>
      <span className="text-xs text-slate-500 mt-1">{description}</span>
    </button>
  )
}
