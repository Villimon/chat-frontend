import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../redux/dialog-reducer';



const InputDialog = React.memo(() => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const onSubmit = (value2) => {
        if (value2.trim().length) {
            dispatch(addMessage(value2))
            setValue('')
        }
    }
    return (
        <div className='dialog__input input-dialog' >
            <span className="input-dialog__icon _icon-clip"></span>
            <input
                type='text'
                className="input-dialog__input"
                placeholder='Введите сообщение'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && onSubmit(value)}
            />
            <span className="input-dialog__icon _icon-smiling"></span>
            <span className="input-dialog__icon _icon-mic"></span>
        </div>
    );
})

export default InputDialog;
