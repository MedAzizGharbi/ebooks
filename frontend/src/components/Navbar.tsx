import { Home, Category, LibraryBooks, Download, Settings, Help, Logout, } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
    const { logout } = useAuth();
    const isLogged = localStorage.getItem("isLoggedIn");
    const [selectedElement, setSelectedElement] = useState<string>("home")
    return (
        <div
            className="w-20 h-screen bg-[#F6EDE3] border-r-2 border-gray-200 flex
    flex-col items-center py-4"
        >
            <div className="flex flex-col gap-6">
                <Link to="/">
                    <div className={`flex flex-col items-center
                        ${selectedElement === "home" ? "bg-orange-400 rounded p-2" : ""}`
                    }
                        onClick={() => setSelectedElement("home")}>
                        <Home className="text-white" />
                        <span className="text-sm text-white">Home</span>
                    </div>
                </Link>
                <div className={`flex flex-col items-center
                        ${selectedElement === "category" ? "bg-orange-400 rounded p-2" : ""}`
                }
                    onClick={() => setSelectedElement("category")}>
                    <Category className={`text-black 
                        ${selectedElement === "category" ? "text-white" : ""}`} />
                    <span className="text-sm text-white">Categories</span>
                </div>
                <div className="flex flex-col items-center">
                    <LibraryBooks className="text-black" />
                    <span className="text-sm text-black">Library</span>
                </div>
                <div className="flex flex-col items-center">
                    <Download className="text-black" />
                    <span className="text-sm text-black">Download</span>
                </div>
            </div >
            <div className="flex-1"></div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center">
                    <Settings className="text-black" />
                    <span className="text-sm text-black">Settings</span>
                </div>
                <div className="flex flex-col items-center">
                    <Help className="text-black" />
                    <span className="text-sm text-black">Support</span>
                </div>
                {isLogged && (
                    <div className="flex flex-col items-center cursor-pointer" onClick={logout}>
                        <Logout className="text-black" />
                        <span className="text-sm text-black">Logout</span>
                    </div>
                )}
            </div>
        </div >
    );
}
