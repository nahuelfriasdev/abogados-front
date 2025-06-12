"use client"

import type React from "react"

import { useState } from "react"
import {Link} from "react-router-dom"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    folio: "",
    college: "",
    password: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "El nombre completo es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresá un email válido"
    }

    if (!formData.folio.trim()) {
      newErrors.folio = "El folio es requerido"
    }

    if (!formData.college.trim()) {
      newErrors.college = "El colegio de abogados es requerido"
    }

    if (!formData.password.trim()) {
      newErrors.password = "La contraseña es requerida"
    } else if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres"
    } else if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\\[\];:'"|,.?/~` ]+$/.test(formData.password)) {
      newErrors.password = "La contraseña contiene caracteres inválidos"
    } else if (/[<>{}]/.test(formData.password)) {
      newErrors.password = "No se permiten los caracteres < > { }"
    }


    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simular llamada a API
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    console.log("Registro exitoso:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-slate-900">Creá tu cuenta en Lexjuri</h1>
            <p className="text-slate-600">Empezá tu prueba gratuita de 7 días y gestioná tus casos con eficiencia.</p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Nombre Completo */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                  Nombre completo
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={`h-11 ${errors.fullName ? "border-red-500 focus-visible:ring-red-500" : "border-slate-300"}`}
                  placeholder="Juan Pérez"
                />
                {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`h-11 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : "border-slate-300"}`}
                  placeholder="juan@ejemplo.com"
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Folio */}
              <div className="space-y-2">
                <Label htmlFor="folio" className="text-sm font-medium text-slate-700">
                  Folio
                </Label>
                <Input
                  id="folio"
                  type="text"
                  value={formData.folio}
                  onChange={(e) => handleInputChange("folio", e.target.value)}
                  className={`h-11 ${errors.folio ? "border-red-500 focus-visible:ring-red-500" : "border-slate-300"}`}
                  placeholder="12345"
                />
                {errors.folio && <p className="text-sm text-red-600">{errors.folio}</p>}
              </div>

              {/* Colegio de Abogados */}
              <div className="space-y-2">
                <Label htmlFor="college" className="text-sm font-medium text-slate-700">
                  Colegio de abogados
                </Label>
                <Select value={formData.college} onValueChange={(value) => handleInputChange("college", value)}>
                  <SelectTrigger
                    className={`h-11 ${errors.college ? "border-red-500 focus:ring-red-500" : "border-slate-300"}`}
                  >
                    <SelectValue placeholder="Seleccioná tu colegio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="caba">Colegio de Abogados de la Ciudad de Buenos Aires</SelectItem>
                    <SelectItem value="provincia-ba">Colegio de Abogados de la Provincia de Buenos Aires</SelectItem>
                    <SelectItem value="cordoba">Colegio de Abogados de Córdoba</SelectItem>
                    <SelectItem value="santa-fe">Colegio de Abogados de Santa Fe</SelectItem>
                    <SelectItem value="mendoza">Colegio de Abogados de Mendoza</SelectItem>
                    <SelectItem value="tucuman">Colegio de Abogados de Tucumán</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.college && <p className="text-sm text-red-600">{errors.college}</p>}
              </div>

              {/* Contraseña */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Contraseña
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    onPaste={(e) => e.preventDefault()} 
                    onKeyDown={(e) => {
                      const forbiddenChars = ['<', '>', '{', '}', '"'];
                      if (forbiddenChars.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    className={`h-11 pr-10 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : "border-slate-300"}`}
                    placeholder="Mínimo 8 caracteres"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-medium"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                "Crear cuenta"
              )}
            </Button>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-slate-600">
                ¿Ya tenés cuenta?{" "}
                <Link to="/login" className="font-medium text-slate-900 hover:text-slate-700 underline">
                  Iniciá sesión
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
