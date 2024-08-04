import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants/indexL";
import "../Components/csss/Navbarlogin.css";
import { auth } from '../firebase';  
import { signOut } from "firebase/auth";

const Navbarlogin = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");  
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <nav className="navbarlog">
    <div className="container-navbar">
      <div className="flex">
        <div className="insider-navbar">
          
        <div className="flex items-center">
  <img className="h-20 w-20 mr-2" src={logo} alt="Logo" />
  <Link to="" className="text-2xl tracking-tight">
    De-Mentor
  </Link>
</div>

        </div>
        <ul className="hidden lg:flex ml-10 space-x-9">
          {navItems.map((item, indexL) => (
            <li key={indexL}>
             <a href={item.href} >
              <label>{item.button}</label>
            </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex tooltip-container" >
          <div className="text">Logout</div>
          <button style={{ backgroundColor: "#d751ad" }}onClick={handleLogout}>SeeYa👋</button>
        </div>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((item, indexL) => (
              <li key={indexL} className="py-4">
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <div className="tooltip-container">
              <div className="text">Logout</div>
              <button style={{ backgroundColor: "#d751ad" }}onClick={handleLogout}>SeeYa👋</button>
              </div>
            </li>
          </ul>
          
        </div>
      )}
    </div>
  </nav>
  );
};

export default Navbarlogin;