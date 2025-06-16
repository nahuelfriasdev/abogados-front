import { Link, Outlet } from "react-router-dom";
import logo from "/logoSoloSinFondo.png"
import logoClaro from "/logoClaro.png"

const LayoutLanding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} className="h-14 w-14" alt="" />
            <span className="text-2xl font-bold text-gray-900">Lexjuri</span><span className="text-blue-700 hover:bg-blue-100">Beta</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Inicio
            </Link>
            <a href="#caracteristicas" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Características
            </a>
            <a href="#precios" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Precios
            </a>
            <Link to="/login" className="border-blue-600 text-white hover:bg-blue-700 px-2 py-1 rounded-md bg-blue-600">
              Iniciar sesión
            </Link>
          </nav>
        </div>
      </header>
        <main className="flex-1">
          <Outlet />
        </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src={logoClaro} className="h-12 w-14" alt="" />
              <span className="text-xl font-bold">Lexjuri</span><span className="text-blue-400 hover:bg-blue-100">Beta</span>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-6 mb-4 md:mb-0">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Términos
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Política de privacidad
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">Copyright © Lexjuri 2025. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LayoutLanding;