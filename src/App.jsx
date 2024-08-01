import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/login" element={<><Login /></>} />
        <Route path="/Contact" element={<><Contact /></>} />
        <Route path="/mainpage" element={<><Navbarlogin /></>} />
    
      </Routes>
    </Router>
  );
};

export default App;
