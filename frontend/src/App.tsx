import Login from "./pages/Auth/Login";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
function RedirectIfLoggedIn({ children }: { children: JSX.Element }) {
    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    return children;
}
function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="login" element={
                            <RedirectIfLoggedIn>
                                <Login />
                            </RedirectIfLoggedIn>
                        } />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
