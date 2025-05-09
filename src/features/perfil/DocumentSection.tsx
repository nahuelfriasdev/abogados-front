"use client"

import { FileText, Download, Eye, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

type Document = {
  id: string
  name: string
  uploadDate: Date
  size: string
  type: string
}

export default function DocumentSection() {
  // En una aplicación real, estos datos vendrían de una API o base de datos
  const documents: Document[] = [
    {
      id: "1",
      name: "Contrato de servicios.pdf",
      uploadDate: new Date(2023, 3, 10),
      size: "1.2 MB",
      type: "pdf",
    },
    {
      id: "2",
      name: "Poder notarial.pdf",
      uploadDate: new Date(2023, 3, 15),
      size: "0.8 MB",
      type: "pdf",
    },
    {
      id: "3",
      name: "Documentación fiscal.docx",
      uploadDate: new Date(2023, 4, 5),
      size: "0.5 MB",
      type: "docx",
    },
    {
      id: "4",
      name: "Escritura de propiedad.pdf",
      uploadDate: new Date(2023, 4, 20),
      size: "2.1 MB",
      type: "pdf",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">Documentos</h2>

        <Button variant="outline" size="sm" className="h-8 gap-1 text-gray-500">
          <Plus className="h-4 w-4" />
          Subir
        </Button>
      </div>

      <div className="space-y-3 max-h-[280px] overflow-y-auto pr-2">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="bg-blue-50 p-2 rounded-lg mr-3">
              <FileText className="h-5 w-5 text-blue-500" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">{doc.name}</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <span>{doc.uploadDate.toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{doc.size}</span>
              </div>
            </div>

            <div className="flex space-x-1 ml-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-blue-500">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-blue-500">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
