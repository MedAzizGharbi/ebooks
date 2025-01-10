import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useAuth } from "../context/AuthContext";
import { AccountCircle } from "@mui/icons-material";
export default function Searchbar() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      <div className="h-16 flex items-center px-5 justify-around">
        <img src={Logo} alt="" className="h-20" />
        <input
          type="text"
          className="rounded px-5 py-1 w-1/2 focus:outline-none"
          placeholder="Title, author, host or topic"
        />
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="bg-orange-400 w-32 text-center text-white p-3 rounded
            cursor-pointer transition ease-in-out hover:bg-orange-500"
          >
            Sign in
          </Link>
        ) : (
          <div
            className="bg-orange-400 px-2 py-1 rounded flex gap-2
                    items-center justify-center"
          >
            <AccountCircle
              sx={{
                color: "white",
              }}
            ></AccountCircle>
            <div className="text-white">{user?.name}</div>
          </div>
        )}
      </div>
      <hr className="border-gray-400 border my-2 w-full" />
    </div>
  );
}
