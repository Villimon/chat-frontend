import React from 'react';
import './styles/styles.scss';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/other/AppRouter';

//1.Поставить ограничение на длину логина в 22 символа

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
