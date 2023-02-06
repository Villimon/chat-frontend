import React from 'react';
import { useState } from 'react';
import Dropdawn from './Dropdawn';
import Modal from '../common/modal/Modal';
import DialogHeaderIcons from './DialogHeaderIcons';
import ModalProfile from './ModalProfile';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const DialogHeader = React.memo(({ user }) => {
    const [dropdawnActive, setDropdawnActive] = useState(false)
    const [modalActive, setModalActive] = useState(false)

    const params = useParams()
    const users = useSelector((state) => state.sidebar.users.filter((userId) => userId._id == params.dialogId))
    const users2 = useSelector((state) => state.auth.data.friends.find((user) => user._id == params.dialogId))


    console.log(users);

    const openProfileInfo = () => {
        setDropdawnActive(false)
        setModalActive(true)
    }

    return (
        <div className='dialog__header header-dialog' >
            <div className='header-dialog__left'>
                <NavLink to='/' className="header-dialog__arrow _icon-arrow-back"></NavLink>
                {user !== 0
                    ? <h4 className="header-dialog__name">{user.fullName[0].toUpperCase() + user.fullName.slice(1)}</h4>
                    : <h4 className="header-dialog__name">{users.length ? users[0].fullName[0].toUpperCase() + users[0].fullName.slice(1) : users2.fullName[0].toUpperCase() + users2.fullName.slice(1)}</h4>
                }
            </div>
            <DialogHeaderIcons params={params} dropdawnActive={dropdawnActive} setDropdawnActive={setDropdawnActive} />
            {dropdawnActive && <Dropdawn openProfileInfo={openProfileInfo} />}
            {modalActive && <Modal active={modalActive} setActive={setModalActive}  >
                <ModalProfile setModalActive={setModalActive} />
            </Modal>}
        </div>
    );
})

export default DialogHeader;
