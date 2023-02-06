import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createDialog } from '../../redux/dialogs-reducer';
import { sendMessage } from '../../redux/messages-reducer';
import Picker from 'emoji-picker-react';

const InputDialog = React.memo(({ dialogId, myId, partner }) => {
    const [value, setValue] = useState('')
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false)

    const toggleEmojiVisible = () => {
        setEmojiPickerVisible(prev => !prev)
    }

    const dispatch = useDispatch()


    const dialogs = useSelector((state) => state.dialogs.dialogs
        .find((dialog) => dialog.author._id === partner || dialog.partner._id === partner))


    const onEmojiClick = (emojiObject, event) => {
        setValue(prev => prev + emojiObject.emoji)
        setEmojiPickerVisible(false)
    }

    console.log('render')
    const onSubmit = (value2) => {
        if (!!!dialogs) {
            if (value2.trim().length) {
                dispatch(createDialog(myId, partner, value2))
                console.log(myId, partner, value2);
                setValue('')
            }
            return
        }

        if (value2.trim().length) {
            dispatch(sendMessage(value2, dialogId))
            setValue('')
        }
    }
    return (
        <div className='dialog__input input-dialog' >
            <div className="input-dialog__icon _icon-clip" >
            </div>
            <input
                type='text'
                className="input-dialog__input"
                placeholder='Введите сообщение'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && onSubmit(value)}
            />
            <div className="input-dialog__icon _icon-smiling" onClick={toggleEmojiVisible}>
                {emojiPickerVisible && <Picker
                    className="input-dialog__emoji"
                    onEmojiClick={onEmojiClick}
                // emojiStyle='google'
                />}
            </div>
            <span className="input-dialog__icon _icon-mic"></span>
        </div>
    );
})

export default InputDialog;
