import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/container/Container';
import UsuarioPropietario from './components/pages/UsuarioPropetario';
import Main from './components/pages/Main';
import UsuarioInvitado from './components/pages/UsuarioInvitado';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/propietario" element={ <UsuarioPropietario /> }/>
      <Route exact path="/invitado" element={ <UsuarioInvitado /> }/>
      <Route exact path="/main" element={ <Main /> }/>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
