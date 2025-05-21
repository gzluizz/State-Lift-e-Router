// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';

export default function App() {
  const [texto, setTexto] = useState("Texto padrão");

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/produtos">Produtos</Link> | 
        <Link to="/sobre">Sobre</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={
          <Produtos texto={texto} setTexto={setTexto} />
        } />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}
