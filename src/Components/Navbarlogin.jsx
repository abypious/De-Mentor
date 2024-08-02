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
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-xl border-neutral-700/80">
    <div className="container px-4 mx-auto relative lg:text-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <img className="h-20 w-20 mr-2" src={logo} alt="Logo" />
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