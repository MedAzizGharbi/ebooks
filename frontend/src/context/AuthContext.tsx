import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
interface User {
  name: string;
  profile: string;
}
interface AuthContextData {
  isLoggedIn: boolean;
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextData | undefined>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext is used outside of AuthProvider !");
  }
  return context;
}
function AuthProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const StoredIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const StoredUser = localStorage.getItem("user");
    if (StoredUser) {
      setUser(JSON.parse(StoredUser));
    }
    if (StoredIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  function login(email: string, password: string) {
    if (isLoggedIn) {
      alert("Deja connecté :/");
      logout();
    }
    if (email === "aziz@gmail.com" && password === "aziz123") {
      const user: User = {
        name: "Aziz",
        profile: "Profile",
      };
      setIsLoggedIn(true);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Coordonnées Invalide!");
    }
  }
  function logout() {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUser(null);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
    }
  }
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export { AuthProvider, useAuth };
