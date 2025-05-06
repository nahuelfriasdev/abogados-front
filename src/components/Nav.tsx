import useAuth from "@/hooks/useAuth";
import logo from "/iuris-logo3-sinfondo.png";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";



const Nav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return(
    <aside className="w-[250px] bg-black/90 text-white p-4">
    <div className="w-[100%] flex justify-center">
      <img src={logo} alt="Logo Iuris"  className="w-[150px] h-[150px]"/>
    </div>
    <h2 className="text-lg font-bold mb-4">Menú</h2>
    <ul className="space-y-2">
      <li>
        <Link to="/" className="hover:text-blue-300">
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/clients" className="hover:text-blue-300">
          Clientes
        </Link>
      </li>
      <li>
        <p className="text-gray-400">
          Tareas / Pendientes (proximamente)
        </p>
      </li>
      <li>
        <p  className="text-gray-400">
        Agenda / Calendario (proximamente)
        </p>
      </li>
      <li>
        <p  className="text-gray-400">
        Documentos (proximamente)
        </p>
      </li>
      
      <li>
        <p className="text-gray-400">
          Configuración (proximamente)
        </p>
      </li>
      <li>
        <Button onClick={handleLogout} className="hover:text-blue-300 bg-white text-black">
          Cerrar Sesión
        </Button>
      </li>
    </ul>
  </aside>
  )
}

export default Nav;