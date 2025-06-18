import { useEffect, useState } from "react";
const baseUrl =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_LOCAL
    : import.meta.env.VITE_API_URL_PRODUCTION;

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/auth/check`, {
      credentials: "include", 
    })
      .then((res) => setIsAuthenticated(res.ok))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsLoading(false));
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await fetch(`${baseUrl}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
};

export default useAuth;
