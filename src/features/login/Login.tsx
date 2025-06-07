import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { authApi } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import logo from "/lexjuri-logo3-sinfondo.png";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Email debe temer almenos 2 caracteres.",
    }),
    password: z.string().min(2,{
      message: "la contraseña debe temer almenos 2 caracteres."
    })

  })

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
    const { email, password} = values;

    try {
        const res  = await authApi(email, password)
        login(res);
        navigate("/home");
    } catch (error) {
      console.error("error al iniciar sesión:", error);
    }
  }

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] bg-[#154360]">
      <article className="flex flex-col justify-between items-center border border-white rounded-2xl h-[500px] w-[400px] p-6">
          <img src={logo} alt="" className="h-[200px] object-contain" />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">password</FormLabel>
                  <FormControl>
                    <Input className="bg-white" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Iniciar Sesión
            </Button>
          </form>
        </Form>
        <p className="text-center">desarrollado por Codendra</p>
      </article>
    </section>
  )
}

export default Login;