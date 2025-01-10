import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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
const AuthContext = createContext<AuthContextData>({
    isLoggedIn: false,
    user: null,
    login: () => { },
    logout: () => { },
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
        if (StoredIsLoggedIn) {
            setIsLoggedIn(true);
        }
    }, [logout])

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
            localStorage.setItem("isLoggedIn", "true")
            setUser(user);
        }
        else {
            alert("Coordonnées Invalide!")
        }
    }
    function logout() {
        if (isLoggedIn) {
            setIsLoggedIn(false);
            setUser(null);
            localStorage.removeItem("isLoggedIn");
        }
    }
    return (
        <AuthContext.Provider value={
            {
                login, logout, user, isLoggedIn
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, useAuth }
