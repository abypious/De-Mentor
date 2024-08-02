import QuitAlcohol from './Components/QuitAlcohol';
import QuitSmoking from './Components/QuitSmoking';
import QuitPorn from './Components/QuitPorn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Navbarlogin from "./Components/Navbarlogin";
import Forgot from "./Components/Forgot";
import Land from "./Components/Land";


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<><Navbar /><Land /><Land /></>} />
        <Route path="/login" element={<><Login /></>} />
        <Route path="/Contact" element={<><Contact /></>} />
        <Route path="/mainpage" element={<><Navbarlogin /><Land /></>} />
        <Route path="/forgot-password" element={<><Forgot /></>} />
        <Route path="/qs" element={<><QuitSmoking /></>} />
        <Route path="/qa" element={<><QuitAlcohol /></>} />
        <Route path="/qp" element={<><QuitPorn /></>} />
        <Route path="/Land" element={<><Land /></>} />

      </Routes>
    </Router>
  );
};

export default App;
