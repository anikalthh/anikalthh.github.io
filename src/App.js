import './App.css';
import React from "react";
import HomePage from './components/HomePage.jsx';
import Contact from './components/Contact.jsx';
import Navigation from './components/Navbar.jsx';
import Art from './components/Art.jsx';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Experience from './components/Experience.jsx';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Experience" element={<Experience />}></Route>
            <Route path="/Art" element={<Art />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
