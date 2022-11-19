import React from 'react';


//Можно создать массив, через мап отприсовать li, а логику навешивать через switch case
//Это можно сделать с этим списком и списком иконок в хедере
const Dropdawn = ({ openProfileInfo }) => {
    return (
        <div className="dropdawn">
            <ul className="dropdawn__list">
                <li className="dropdawn__item" >
                    <span className="dropdawn__icon _icon-volume-off" ></span>
                    Выключить уведомления
                </li>
                <li className="dropdawn__item" onClick={() => openProfileInfo()} >
                    <span className="dropdawn__icon _icon-person" ></span>
                    Показать профиль
                </li>
                <li className="dropdawn__item">
                    <span className="dropdawn__icon _icon-close-circle" ></span>
                    Заблокировать</li>
                <li className="dropdawn__item">
                    <span className="dropdawn__icon _icon-trash" ></span>
                    Удалить чат</li>
            </ul>
        </div>
    );
}

export default Dropdawn;


