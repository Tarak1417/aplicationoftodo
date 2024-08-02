import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SIgnup from './SIgnup';
import Login from './Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="Maincontainer">
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<SIgnup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
