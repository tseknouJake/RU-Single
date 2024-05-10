import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import ServerTest from './pages/ServerTest';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/serverTest" element={<ServerTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;