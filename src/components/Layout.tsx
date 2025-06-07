import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <div className="flex flex-grow">
        <Nav />
        <main className="flex-grow p-6 overflow-y-auto bg-white shadow-inner">
          <Outlet />
        </main>
      </div>

      <footer className="bg-zinc-900 text-white text-center py-2 text-sm">
        <p className="uppercase tracking-wider">Desarrollado por Codendra</p>
      </footer>
    </div>
  );
};

export default Layout;