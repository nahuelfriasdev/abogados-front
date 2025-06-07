import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  CheckSquare,
  Calendar,
  Smartphone,
  Shield,
  Bell,
  Upload,
  MessageSquare,
  Eye,
  Layout,
  Users,
  Headphones,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function Characteristics() {
  const lawyerFeatures = [
    {
      icon: FileText,
      title: "Gestión de casos por expediente",
      description: "Organizá todos tus casos de manera estructurada y accesible",
    },
    {
      icon: Upload,
      title: "Subida de documentos legales",
      description: "Cargá y organizá documentos de forma segura en cada expediente",
    },
    {
      icon: CheckSquare,
      title: "Creación de tareas internas",
      description: "Asigná tareas y mantené el control de cada proceso legal",
    },
    {
      icon: Calendar,
      title: "Seguimiento de vencimientos",
      description: "No te pierdas ninguna fecha importante con recordatorios automáticos",
    },
    {
      icon: Smartphone,
      title: "Acceso multi-dispositivo",
      description: "Trabajá desde cualquier lugar con sincronización en tiempo real",
    },
    {
      icon: Shield,
      title: "Seguridad cifrada",
      description: "Protección de datos con los más altos estándares de seguridad",
    },
  ]

  const clientFeatures = [
    {
      icon: Eye,
      title: "Seguimiento en tiempo real",
      description: "Conocé el estado de tu caso en cualquier momento",
    },
    {
      icon: Upload,
      title: "Subida directa de documentos",
      description: "Enviá documentación directamente al expediente de tu caso",
    },
    {
      icon: Bell,
      title: "Notificaciones automáticas",
      description: "Recibí actualizaciones importantes sobre tu caso",
    },
    {
      icon: MessageSquare,
      title: "Comunicación directa",
      description: "Contactá con tu abogado desde la misma plataforma",
    },
  ]

  const extraFeatures = [
    {
      icon: Layout,
      title: "Panel claro y minimalista",
      description: "Interfaz intuitiva diseñada para la productividad",
    },
    {
      icon: Users,
      title: "Sistema multiusuario",
      description: "Perfecto para estudios pequeños y equipos de trabajo",
    },
    {
      icon: Headphones,
      title: "Soporte integrado",
      description: "Asistencia rápida y especializada cuando la necesités",
    },
  ]

  return (
   <div className="min-h-screen bg-white text-gray-900">
  <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Características de Lexjuri</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Descubrí cómo Lexjuri simplifica la gestión legal para abogados y clientes.
      </p>
    </div>

    {/* Para Abogados */}
    <section className="mb-20">
      <div className="flex items-center mb-8">
        <Badge className="bg-blue-100 text-blue-700 border border-blue-200 mr-4">
          Para Abogados
        </Badge>
        <h2 className="text-3xl font-bold text-gray-900">Herramientas profesionales</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lawyerFeatures.map((feature, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Para Clientes */}
    <section className="mb-20">
      <div className="flex items-center mb-8">
        <Badge className="bg-green-100 text-green-700 border border-green-200 mr-4">
          Para Clientes
        </Badge>
        <h2 className="text-3xl font-bold text-gray-900">Transparencia total</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {clientFeatures.map((feature, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Extras */}
    <section className="mb-20">
      <div className="flex items-center mb-8">
        <Badge className="bg-purple-100 text-purple-700 border border-purple-200 mr-4">
          Extras
        </Badge>
        <h2 className="text-3xl font-bold text-gray-900">Valor agregado</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {extraFeatures.map((feature, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-gray-900 text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="text-center bg-indigo-50 rounded-2xl p-12 border border-indigo-100">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">¿Querés probarlo?</h3>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Comenzá a gestionar tus casos legales de manera más eficiente. Probá Lexjuri gratis durante 7 días, sin compromiso.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md flex items-center">
          Probar gratis 7 días
        </Link>
        <Link to="/register" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-2 flex rounded-md items-center">
          Crear cuenta
        </Link>
      </div>
    </section>
  </main>
</div>

  )
}
