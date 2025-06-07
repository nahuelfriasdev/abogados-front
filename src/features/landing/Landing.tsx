import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, FileText, CheckCircle, ArrowRight, Mail, Clock, Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Plataforma Legal Digital</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Gestioná tus casos legales de forma{" "}
                  <span className="text-blue-600">simple, segura y profesional</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Lexjuri conecta abogados y clientes en una plataforma donde todo está organizado, seguro y al alcance
                  de un clic.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md flex items-center">
                  Probar gratis 7 días
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Button disabled variant="outline" size="lg" className="px-8 py-3">
                  Ver demo
                </Button>
              </div>
              <p className="text-blue-700 text-sm mt-4">Sin tarjeta de crédito • Configuración en 5 minutos</p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Caso: Divorcio - María González</h3>
                    <Badge className="bg-green-100 text-green-700">En progreso</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Documentos iniciales subidos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Audiencia programada - 15 Ene</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-500">Pendiente: Acuerdo patrimonial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Una plataforma, múltiples beneficios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diseñada para abogados y clientes que buscan eficiencia, transparencia y profesionalismo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Menos mails, más claridad</h3>
                <p className="text-gray-600">Toda la comunicación centralizada en un solo lugar</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tareas y documentos organizados</h3>
                <p className="text-gray-600">Cada caso con su propio espacio ordenado y accesible</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tus clientes siempre informados</h3>
                <p className="text-gray-600">Actualizaciones en tiempo real del estado de su caso</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seguridad legal extrema</h3>
                <p className="text-gray-600">Encriptación de extremo a extremo y cumplimiento normativo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Example Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cómo funciona en la práctica</h2>
            <p className="text-xl text-gray-600">Un ejemplo real de cómo Lexjuri simplifica el trabajo legal</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Caso de divorcio complejo</h3>
                <p className="text-gray-600 mb-4">Múltiples documentos, audiencias y tareas por gestionar</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <FileText className="h-4 w-4 mr-2" />
                    15 documentos
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />3 audiencias
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-green-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Abogado organiza todo</h3>
                <p className="text-gray-600 mb-4">Crea tareas, sube documentos y programa recordatorios</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Tareas asignadas
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    Cliente notificado
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Todo fluye naturalmente</h3>
                <p className="text-gray-600 mb-4">Cliente sube papeles, recibe actualizaciones, caso avanza</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Proceso fluido
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="h-4 w-4 mr-2" />
                    Cliente satisfecho
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros usuarios</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Lexjuri transformó completamente mi práctica. Mis clientes están más informados y yo tengo todo bajo
                  control. Es la herramienta que todo abogado necesita."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">DR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Roberto Martínez</p>
                    <p className="text-gray-600 text-sm">Abogado especialista en familia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Como cliente, finalmente entiendo qué pasa con mi caso. Puedo ver el progreso y subir documentos
                  cuando los necesitan. Es muy tranquilizador."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">MG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">María González</p>
                    <p className="text-gray-600 text-sm">Cliente satisfecha</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

              <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Planes diseñados para tu práctica legal
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Desde estudios individuales hasta grandes firmas. Elegí el plan que mejor se adapte a tus necesidades.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Plan Básico */}
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Básico</h3>
                    <p className="text-gray-600 mb-6">Perfecto para abogados independientes</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">$29</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      Comenzar prueba gratuita
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Hasta 10 casos activos</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">5 GB de almacenamiento</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Gestión básica de documentos</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Portal del cliente</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Soporte por email</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plan Profesional - Destacado */}
              <Card className="bg-white border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-shadow relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1">Más Popular</Badge>
                </div>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Profesional</h3>
                    <p className="text-gray-600 mb-6">Ideal para estudios en crecimiento</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-600">$79</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Comenzar prueba gratuita
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Hasta 50 casos activos</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">50 GB de almacenamiento</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Gestión avanzada de documentos</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Portal del cliente personalizado</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Automatización de tareas</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Reportes y analytics</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Soporte prioritario</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plan Empresarial */}
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Empresarial</h3>
                    <p className="text-gray-600 mb-6">Para grandes firmas y equipos</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">$199</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Contactar ventas</Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Casos ilimitados</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">500 GB de almacenamiento</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Gestión empresarial completa</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Marca personalizada</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">API y integraciones</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Usuarios ilimitados</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Soporte 24/7 dedicado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Pricing */}
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Preguntas frecuentes sobre precios</h3>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">¿Puedo cambiar de plan en cualquier momento?</h4>
                    <p className="text-gray-600">
                      Sí, podés actualizar o reducir tu plan cuando quieras. Los cambios se aplican en el próximo ciclo
                      de facturación.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">¿Qué incluye la prueba gratuita?</h4>
                    <p className="text-gray-600">
                      7 días completos con acceso a todas las funciones del plan Profesional, sin restricciones.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">¿Los precios incluyen IVA?</h4>
                    <p className="text-gray-600">
                      Los precios mostrados no incluyen IVA. Se aplicará según la legislación vigente en tu país.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">¿Ofrecen descuentos anuales?</h4>
                    <p className="text-gray-600">
                      Sí, al pagar anualmente obtenés 2 meses gratis en todos los planes. Contactanos para más detalles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Empieza gratis hoy y descubrí cómo Lexjuri transforma tu manera de trabajar
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a cientos de abogados que ya confían en Lexjuri para gestionar sus casos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-2 flex rounded-md items-center">
                Crear cuenta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to=""
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-2 flex rounded-md items-center"
              >
                Hablar con ventas
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-4">Sin tarjeta de crédito • Configuración en 5 minutos</p>
          </div>
        </div>
      </section>
    </div>
  )
}
