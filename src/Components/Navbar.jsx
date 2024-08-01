import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Components/Navbarlogin.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-40 py-0 backdrop-blur-xl border-neutral-700/80">
      <div className="container px-6 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-20 mr-1" src={logo} alt="Logo" />
            <Link to="/" className="text-2xl tracking-tight">
              DeMentor
            </Link>
          </div>
          <ul className="hidden lg:flex ml-10 space-x-9">
           
          </ul>

         
          <div className="hidden lg:flex tooltip-container">
            <Link to="/login">
              <button className="text">Get Started</button>
              <button>Login</button>
            </Link>
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
             
            </ul>

            
            <div className="tooltip-container">
              <Link to="/login">
                <button className="text">Get Started</button>
                <button>Login</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
