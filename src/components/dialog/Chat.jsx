import React from 'react';
import UserPhoto from '../../assets/images/photoUser.jpg'

const Chat = React.memo((props) => {
    return (
        <div className='chat-dialog' >
            <div className="chat-dialog__user">
                <img src={UserPhoto} className="chat-dialog__img" />
                <div className="chat-dialog__time">{props.time}</div>
            </div>
            <div className="chat-dialog__message">{props.text}</div>
        </div>
    );
})

export default Chat;
