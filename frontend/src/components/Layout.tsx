import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
export default function Layout() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        <Outlet /> 
      </div>
    </div>
  )
}

