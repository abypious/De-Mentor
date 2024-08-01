import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Navbarlogin from "./Components/Navbarlogin";
import Forgot from "./Components/Forgot";
import Land from "./Components/Land";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="/mainpage"
          element={
            <>
              <Navbarlogin />
            </>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <>
              <Forgot />
            </>
          }
        />
        <Route
          path="/Land"
          element={
            <>
              <Land />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
