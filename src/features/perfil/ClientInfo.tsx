import { Textarea } from "@/components/ui/textarea"
import getClient from "@/services/getClient"
import { Client } from "@/types/client"
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ClientInfo() {
  const [clientData, setClientData] = useState<Client>()
  const { id } = useParams();

  const getClientData = async (id: string) => {
    try {
        const res = await getClient(id);
        console.log(res)
        setClientData(res)
    } catch (error) {
      console.error("Error al obtener los datos del cliente:", error)
    }
  }
  useEffect(() => {
    getClientData(id as string)
  }, [id])

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-800">Información del Cliente</h2>
        <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">Editar</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <User className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Nombre completo</p>
              <p className="font-medium text-gray-800">{`${clientData?.name}  ${clientData?.username} `}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Mail className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Correo electrónico</p>
              <p className="font-medium text-gray-800">{clientData?.email}</p>
            </div>
          </div>

          

          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <MapPin className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Localidad</p>
              <p className="font-medium text-gray-800">{clientData?.locality}</p>
            </div>
          </div>

          
          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Calendar className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Nº de Expediente</p>
              <p className="font-medium text-gray-800">{clientData?.fileNumber}</p>
            </div>
          </div>
          
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <User className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Número de documento</p>
              <p className="font-medium text-gray-800">{clientData?.dni}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Phone className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Teléfono</p>
              <p className="font-medium text-gray-800">{clientData?.phone}</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Calendar className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tipo Causa</p>
              <p className="font-medium text-gray-800">{clientData?.causeType}</p>
            </div>
          </div>
        </div>
        <div className="flex items-start mt-5 md:col-span-2">
          <div className="bg-blue-50 p-2 rounded-full mr-3">
            <Calendar className="h-5 w-5 text-blue-500" />
          </div>
          <div className="w-[100%]">
            <p className="text-sm text-gray-500">Descripción</p>
            <Textarea value={clientData?.description}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}
