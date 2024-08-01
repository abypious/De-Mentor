import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import "../Components/Navbarlogin.css";

const Navbarlogin = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
   <nav className="navbarlogin">
      <div className="navbarlogin-container">
        <div className="navbarlogin-flex">
          <div className="navbarlogin-logo-container">
            <img className="navbarlogin-logo" src={logo} alt="Logo" />
            <Link to="/" className="text-2xl tracking-tight">
              DeMentor
            </Link>
          </div>
          <ul className="hidden lg:flex ml-10 space-x-9">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex tooltip-container">
            <div className="text">Logout</div>
            <button>SeeYa!👋</button>
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
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="tooltip-container">
              <div className="text">Get Started</div>
              <button>Login</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbarlogin;
