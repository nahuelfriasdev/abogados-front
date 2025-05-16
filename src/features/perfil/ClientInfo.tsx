import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import getClient from "@/services/client/getClient"
import putClient from "@/services/client/putClient"
import { Client } from "@/types/client"
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ClientInfo() {
  const [clientData, setClientData] = useState<Client>()
  const [isEditing, setIsEditing] = useState(false)
  const { id } = useParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    if (!clientData) return;
    setClientData({
      ...clientData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try{
      if (!id) return;
      if (!clientData) return;

      await putClient(id, clientData)

    } catch (error) {
      console.error("Error al guardar los cambios del perfil:", error)
    }
    setIsEditing(!isEditing)
  }

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
        {isEditing ? 
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium" onClick={handleSubmit}>Guardar</button>
          : <button className="text-blue-500 hover:text-blue-600 text-sm font-medium" onClick={() => setIsEditing(!isEditing)}>Editar</button>
        }
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <User className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Nombre completo</p>
              {isEditing ?
                <Input value={`${clientData?.name}  ${clientData?.username} `} name="name" onChange={(e) => handleInputChange(e)}/>
                : <p className="font-medium text-gray-800">{`${clientData?.name}  ${clientData?.username} `}</p>
              }
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Mail className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Correo electrónico</p>
              {isEditing ?
                <Input value={clientData?.email} name="email" onChange={(e) => handleInputChange(e)}/>
                : <p className="font-medium text-gray-800">{clientData?.email}</p>
              }
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <MapPin className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Localidad</p>
              {isEditing ?
                <Input value={clientData?.locality} name="locality" onChange={(e) => handleInputChange(e)}/>
                : <p className="font-medium text-gray-800">{clientData?.locality}</p>
              }
            </div>
          </div>

          
          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Calendar className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Nº de Expediente</p>
              {isEditing ?
                <Input value={clientData?.fileNumber} name="fileNumber" onChange={(e) => handleInputChange(e)}/>
                : <p className="font-medium text-gray-800">{clientData?.fileNumber}</p>
              }
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
              {isEditing ?
                <Input value={clientData?.dni} name="dni" onChange={(e) => handleInputChange(e)}/>
                : <p className="font-medium text-gray-800">{clientData?.dni}</p>
              }
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Phone className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Teléfono</p>
              {isEditing ?
                <Input type="number" name="phone" value={clientData?.phone} onChange={(e) => handleInputChange(e)}/>
                : <p className="font-medium text-gray-800">{clientData?.phone}</p>
              }
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-50 p-2 rounded-full mr-3">
              <Calendar className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tipo Causa</p>
              {isEditing ?
                <Input value={clientData?.causeType} name="causeType" onChange={(e) => handleInputChange(e)}/>
                : <p className="font-medium text-gray-800">{clientData?.causeType}</p>
              }
            </div>
          </div>
        </div>
        <div className="flex items-start mt-5 md:col-span-2">
          <div className="bg-blue-50 p-2 rounded-full mr-3">
            <Calendar className="h-5 w-5 text-blue-500" />
          </div>
          <div className="w-[100%]">
            <p className="text-sm text-gray-500">Descripción</p>
            {isEditing ?
              <Textarea value={clientData?.description} name="description" onChange={(e) => handleInputChange(e)}/>
              : <p>{clientData?.description}</p>
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}
