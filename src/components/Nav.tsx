import useAuth from "@/hooks/useAuth";
import logo from "/lexjuri-logo3-sinfondo.png";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Calendar, FileText, Home, LogOut, Settings, Users } from "lucide-react";
import { useState } from "react";
import { LawyerData } from "@/types/lawyer";
import useLawyerData from "@/hooks/useLawyerData";



const Nav = () => {
  const [data, setData] = useState<LawyerData | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useLawyerData({ setData });

  return (
    <aside className="w-64 bg-zinc-900 text-white flex flex-col px-4 py-6 shadow-lg">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo Lexjuri" className="w-28 h-28 object-contain" />
      </div>

      <div className="my-4 text-sm flex flex-col gap-y-2">
        <p><strong>Nombre:</strong> Dr/a {data?.lawyer.name}</p>
        <p><strong>FOLIO:</strong> Nº 4165165165</p>
        <p><strong>Colegio:</strong> escuela de abogados nº5</p>
      </div>

      <nav className="flex flex-col gap-3 text-sm font-medium">
        <Link to="/home" className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-zinc-800 ${isActive("/") && "bg-zinc-800"}`}>
          <Home size={18} /> Inicio
        </Link>

        <Link to="/clients" className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-zinc-800 ${isActive("/clients") && "bg-zinc-800"}`}>
          <Users size={18} /> Clientes
        </Link>

        <div className="text-gray-400 px-3 mt-4">Próximamente</div>
        <span className="flex items-center gap-2 px-3 py-2 text-gray-500 cursor-not-allowed">
          <Calendar size={18} /> Agenda
        </span>
        <span className="flex items-center gap-2 px-3 py-2 text-gray-500 cursor-not-allowed">
          <FileText size={18} /> Documentos
        </span>
        <span className="flex items-center gap-2 px-3 py-2 text-gray-500 cursor-not-allowed">
          <Settings size={18} /> Configuración
        </span>

        <Button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="mt-6 bg-white text-black hover:bg-blue-100"
        >
          <LogOut size={16} className="mr-2" /> Cerrar sesión
        </Button>
      </nav>
    </aside>
  );
}

export default Nav;