import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { authApi } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Eye, EyeOff, Lock, Mail, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
// import { Separator } from "@/components/ui/separator";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const sanitizeInput = (str: string) => {
    return str.replace(/[<>{}"]/g, ""); // remueve caracteres comunes de XSS
  };


const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Email inválido." })
    .max(100, { message: "Email demasiado largo." }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres." })
    .max(100, { message: "Contraseña demasiado larga." })
    .refine(val => /^[\x20-\x7E]+$/.test(val), {
      message: "Caracteres inválidos detectados.",
    }),
});


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    const email = sanitizeInput(values.email);
    const password = sanitizeInput(values.password);
    try {
        await authApi(email, password)
        login();
        navigate("/home");
    } catch (error) {
      console.error("error al iniciar sesión:", error);
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
     
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Iniciar Sesión</CardTitle>
              <p className="text-gray-600">Accedé a tu plataforma legal profesional</p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                {/* <Button
                  variant="outline"
                  className="w-full h-12 border-gray-300 hover:bg-gray-50"
                  onClick={() => console.log("Google login")}
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continuar con Google
                </Button> */}
              </div>

              {/* <div className="relative">
                <Separator className="my-6" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 text-sm text-gray-500">o continúa con email</span>
                </div>
              </div> */}

              {/* Email/Password Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500" onPaste={(e) => e.preventDefault()}  type={showPassword ? "text" : "password"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                        Recordarme
                      </Label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div> */}

                  <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium">
                    Iniciar Sesión
                  </Button>
                </form>
              </Form>
              {/* Additional Links */}
              <div className="text-center space-y-4">
                {/* <div className="text-sm text-gray-600">
                  ¿Primera vez en LexJuri?{" "}
                  <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                    Crear cuenta gratis
                  </Link>
                </div> */}

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Al iniciar sesión, aceptás nuestros{" "}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-700">
                      Términos de Servicio
                    </Link>{" "}
                    y{" "}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-700">
                      Política de Privacidad
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
              <Scale className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm text-gray-600">Plataforma segura y certificada para profesionales legales</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login;