import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Nav />
        <main className="flex-grow p-6 overflow-auto">
          <Outlet />
        </main>
      </div>

      <footer className="bg-black/90 text-center py-1 text-white">
        <h2 className="uppercase">desarrollado por NsoFware</h2>
      </footer>
    </div>
  );
};

export default Layout;