import { createContext, useState, useEffect } from "react";
import Parse from "parse";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = Parse.User.current();
    setUser(currentUser);
  }, []);

  const login = async (email, password, rememberMe) => {
    try {
      const loggedUser = await Parse.User.logIn(email, password);
      setUser(loggedUser);

      if (rememberMe) {
        localStorage.setItem("sessionToken", loggedUser.getSessionToken());
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    await Parse.User.logOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
