import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Components/csss/Navbar.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="navbar">
    <div className="container-navbar">
      <div className="flex">
        <div className="insider-navbar">
        <div className="flex items-center">
  <img className="h-20 w-20 mr-2" src={logo} alt="Logo" />
  <Link to="/" className="text-2xl tracking-tight">
    De-Mentor
  </Link>
</div>
          </div>
          <ul className="hidden lg:flex ml-10 space-x-9"></ul>

          <div className="hidden lg:flex tooltip-container" >
            <Link to="/login">
              <button className="text">Get Started</button>
              <button style={{ backgroundColor: "#14d37d" }}>Login</button>
            </Link>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="mobile-drawer">
            <ul></ul>

            <div className="tooltip-container">
              <Link to="/login">
                <button className="text">Get Started</button>
                <button style={{ backgroundColor: "#14d37d" }}>Login</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
