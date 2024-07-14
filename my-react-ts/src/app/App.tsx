// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Routes } from "./routes/Index";
import { UsuarioLogadoProvider } from "./shared/contexts";

export const App = () => {
  return (
    // compartilhando tudo dentro de rotas o contexto
    // de UsuarioLogadoProvider
    <UsuarioLogadoProvider>
      <Routes/>
    </UsuarioLogadoProvider>
  );
}

//export default App;