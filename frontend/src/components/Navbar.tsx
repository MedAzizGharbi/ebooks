import {
  Home,
  Category,
  LibraryBooks,
  Download,
  Settings,
  Help,
  Logout,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
  const { logout, isLoggedIn } = useAuth();
  const [selectedElement, setSelectedElement] = useState<string>("home");
  return (
    <div
      className="w-20 min-h-screen bg-[#F6EDE3] border-r-2 border-gray-200 flex
    flex-col items-center py-4"
    >
      <div className="flex flex-col gap-6">
        <Link to="/">
          <div
            className={`flex flex-col items-center rounded p-2 cursor-pointer
                    transition ease-in-out duration-300
                        ${selectedElement === "home" ? "bg-orange-400 " : ""}`}
            onClick={() => setSelectedElement("home")}
          >
            <Home className="text-black" />
            <span className="text-sm text-black">Home</span>
          </div>
        </Link>
        <Link to="/categories">
          <div
            className={`flex flex-col items-center rounded p-2 cursor-pointer
                    transition ease-in-out duration-300
                    ${selectedElement === "category" ? "bg-orange-400" : ""}`}
            onClick={() => setSelectedElement("category")}
          >
            <Category className="text-black" />
            <span className="text-sm text-black">Categories</span>
          </div>
        </Link>
        {isLoggedIn && (
          <>
            <div className="flex flex-col items-center">
              <LibraryBooks className="text-black" />
              <span className="text-sm text-black">Library</span>
            </div>
            <div className="flex flex-col items-center">
              <Download className="text-black" />
              <span className="text-sm text-black">Download</span>
            </div>
          </>
        )}
      </div>
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
        {isLoggedIn && (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={logout}
          >
            <Logout className="text-black" />
            <span className="text-sm text-black">Logout</span>
          </div>
        )}
      </div>
    </div>
  );
}
