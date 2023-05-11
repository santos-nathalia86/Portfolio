import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sobre from './components/Sobre/sobre'
import NavBar from './components/NavBar/navbar'
import Contato from './components/Contato/contato'
import Header from './components/Header/header'
import Portfolio from './components/Portfolio/portfolio'
import Menu from './components/Menu/menu';

function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' element={<Menu/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contato' element={<Contato/>} />

      </Routes>
   </Router>
  );
}

export default App;
