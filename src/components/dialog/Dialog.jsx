import React from 'react';
import { useSelector } from 'react-redux';
import Chat from './Chat';
import DialogHeader from './DialogHeader';
import InputDialog from './InputDialog';



const Dialog = React.memo(() => {
    const messages = useSelector((state) => state.dialog.messages)

    return (
        <div className="dialog">
            <DialogHeader />
            <div className='dialog__chat' >
                {messages.map((mes) => <Chat
                    key={mes.id}
                    id={mes.id}
                    time={mes.time}
                    text={mes.text}
                />)}
            </div>
            <InputDialog />
        </div>
    );
})

export default Dialog;
