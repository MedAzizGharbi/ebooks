import {
  Home,
  Category,
  LibraryBooks,
  Download,
  Settings,
  Help,
  Logout,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const isLogged = false;
export default function Navbar() {
  return (
    <div
      className="w-20 h-screen bg-[#F6EDE3] border-r-2 border-gray-200 flex
    flex-col items-center py-4"
    >
      <div className="flex flex-col gap-6">
        <Link to="/" className="flex flex-col items-center">
          <Home className="text-black" />
          <span className="text-sm text-black">Home</span>
        </Link>
        <div className="flex flex-col items-center">
          <Category className="text-black" />
          <span className="text-sm text-black">Category</span>
        </div>
        <div className="flex flex-col items-center">
          <LibraryBooks className="text-black" />
          <span className="text-sm text-black">Library</span>
        </div>
        <div className="flex flex-col items-center">
          <Download className="text-black" />
          <span className="text-sm text-black">Download</span>
        </div>
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
        {isLogged && (
          <div className="flex flex-col items-center">
            <Logout className="text-black" />
            <span className="text-sm text-black">Logout</span>
          </div>
        )}
      </div>
    </div>
  );
}
