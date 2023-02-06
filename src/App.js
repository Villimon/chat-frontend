import React, { useEffect, useState } from 'react';
import './styles/styles.scss';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/pages/AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserData } from './redux/auth-reducer';
import io from 'socket.io-client'
import { messagesAPI } from './api/api';






function App() {

  const dispatch = useDispatch()
  const profile = useSelector((state) => state.auth.data)





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
