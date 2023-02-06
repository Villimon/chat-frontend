import React, { useEffect, useState } from 'react';
import './styles/styles.scss';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/pages/AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserData } from './redux/auth-reducer';
import io from 'socket.io-client'
import { messagesAPI } from './api/api';

// 1.Проверить удаляется ли с диалогом все сообщения(не удаляет)
// 2.При создании диалога отправляется два сообшщения
// 3.Эмоджи показываются другие, не те которые должны(Archakov делает это в 19видосе до 1:00:00)
// 
// 
// 
// 1. Чтобы скелет хедера и диалогов был разным
// 2. Сделать правильную подгрзхку данных чтобы был лоадинг какой-то
// 3. При отправке другим пользователем сообщение отображается другая аватарка
// 4. Сделать скролл
// 5. Сообщение приходит всем, но при обновлении остается только у того кому пренадлжеит !!!!
// 7. Разобраться со временем
// 8. Сделать нормальное облачко под сообщение
// 9. Сделать скролл красивие и толще
// 10.Сделать текстариу вместо инпута где ввод сообщения
// 
// 1.Объеденить Actions в один объект 
// 
// 
// 
// 
// 1.Настройка чата, веб сокета
// 2.Мут
// 3.Онлайн
// 4.Чтение сообщения
// 
// 
// 
// 1. Убрать поле "Выключить уведомление"
// 2. При удаление последнего сообщения может быть ошибка, ластМесаге будет равно null
// 3. Подумать насчет эмоджи, они как-то влияют на производительность проекта...(мб попробовать другие)
// 
// 




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
