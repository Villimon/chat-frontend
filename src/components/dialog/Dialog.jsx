import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage, getMessages } from '../../redux/messages-reducer';
import Chat from './Chat';
import DialogHeader from './DialogHeader';
import InputDialog from './InputDialog';
import socket from '../../api/socket';


const Dialog = React.memo(() => {
    const params = useParams()
    const dispatch = useDispatch()

    const dialog = useSelector((state) => state.dialogs.dialogs.filter(dialog => dialog.partner._id === params.dialogId || dialog.author._id === params.dialogId))
    const messages = useSelector((state) => state.messages.messages)
    const myId = useSelector((state) => state.auth.data._id)

    // console.log(params);
    // console.log(dialog);

    // Сюда можно вынести const params = useParams()

    const onNewMessage = (data) => {
        dispatch(addMessage(data))
    }


    useEffect(() => {
        if (dialog.length) { dispatch(getMessages(dialog[0]._id)) }

        socket.on('NEW:MESSAGE', onNewMessage)
        console.log('Сокет открылся');
        return () => {
            socket.removeListener('NEW:MESSAGE', onNewMessage)
            console.log('Сокет закрылся');
        }
    }, [params])




    return (
        <div className="dialog">
            <DialogHeader user={dialog.length && dialog[0].partner} />
            <div className='dialog__chat' >
                {messages.map((mes) => <Chat
                    mes={mes}
                    key={mes._id}
                    avatar={mes.user.avatarUrl}
                    time={mes.createdAt}
                    text={mes.text}
                    unread={mes.unread}
                    myId={myId}
                />)}
            </div>
            <InputDialog
                onNewMessage={onNewMessage}
                dialogId={dialog.length && dialog[0]._id}
                myId={myId}
                partner={params.dialogId}
            />

        </div>
    );
})

export default Dialog;
