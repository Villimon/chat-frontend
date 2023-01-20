import React, { useEffect } from 'react';
import './styles/styles.scss';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/pages/AppRouter';
import { useDispatch } from 'react-redux';
import { GetUserData } from './redux/auth-reducer';


// 
// 
// 
// 1. Чтобы скелет хедера и диалогов был разным
// 
// 
// 
// 
// 
// 
// 
// 
// 4.Настройка чата, веб сокета
// 5.Мут
// 





function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(GetUserData())

  }, [])



  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
