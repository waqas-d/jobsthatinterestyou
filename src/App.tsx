import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePageComponent from './components/HomePageComponent';

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent/>
         <Routes>

          <Route path='/' element={<HomePageComponent />} />


        </Routes>
    </BrowserRouter>
  );
}

export default App;
