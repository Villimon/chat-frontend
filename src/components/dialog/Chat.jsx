import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserPhoto from '../../assets/images/photoUser.jpg'
import { deleteMessage } from '../../redux/messages-reducer';

const Chat = React.memo((props) => {
    const [activeMode, setActiveMode] = useState(false)
    const dispatch = useDispatch()


    const handlerDeleteMessage = (id) => {
        if (window.confirm('Вы действительно хотите удалить сообщение?')) {
            dispatch(deleteMessage(id))
        }
    }

    const onClick = () => {
        if (props.mes.user._id === props.myId) {
            setActiveMode(prev => !prev)
        }
    }


    return (
        <div className={props.mes.user._id === props.myId ? 'chat-dialog partner' : 'chat-dialog '} >
            <div className="chat-dialog__user">
                <img src={props.avatar ? `http://localhost:3003${props.avatar}` : UserPhoto} className="chat-dialog__img" />
                <div className="chat-dialog__time">{props.time.slice(11, 16)}</div>
            </div>
            <div className="chat-dialog__message" onClick={onClick}>{props.text}</div>
            {activeMode && <button className="chat-dialog__delete" onClick={() => handlerDeleteMessage(props.mes._id)}>Удалить сообщение</button>}
        </div>
    );
})

export default Chat;
