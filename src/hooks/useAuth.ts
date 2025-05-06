import { deleteCookie, getCookie } from "@/services/getCookie";
import { useEffect, useState } from "react"

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getCookie("authToken");
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    document.cookie = `authToken=${token}; path=/; max-age=3600; secure; samesite=strict`;
    setIsAuthenticated(true);
  };

  const logout = () => {
    deleteCookie("authToken");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
};

export default useAuth;