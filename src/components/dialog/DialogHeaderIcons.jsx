import React from 'react';

const DialogHeaderIcons = React.memo(({ setDropdawnActive, dropdawnActive }) => {

    return (
        <div className='header-dialog__icons'>
            <span className="header-dialog__icon _icon-person-add"></span>
            <span className="header-dialog__icon _icon-search"></span>
            <span className="header-dialog__icon _icon-phone"></span>
            <span
                onClick={() => setDropdawnActive(!dropdawnActive)}
                className="header-dialog__icon _icon-more"></span>
        </div>
    );
})

export default DialogHeaderIcons;
