import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhotoUser from '../../assets/images/photoUser.jpg'
import { savePhoto, updateFullName } from '../../redux/auth-reducer';
import Modal from '../common/modal/Modal';



const Profile = React.memo(({ setActive, user }) => {
    const [modalActive, setModalActive] = useState(false)
    const [newFullName, setNewFullName] = useState('')

    const dispatch = useDispatch()

    const handleChangeFile = async (e) => {
        try {
            dispatch(savePhoto(e.target.files[0]))
        } catch (error) {
            console.log(error);
            alert('Ошибка при загрузке')
        }
    }

    const _updateFullName = () => {
        dispatch(updateFullName(newFullName))
        setModalActive(false)
        setNewFullName('')
    }

    return (
        <div className='profile active' onClick={() => setActive(false)}>
            <div className='profile__content active' onClick={e => e.stopPropagation()} >
                <div className="profile__top">
                    <img src={user.avatarUrl ? `http://localhost:3003${user.avatarUrl}` : PhotoUser} alt="" className="profile__img" />
                    <h4 className="profile__name">{user.fullName}</h4>
                </div>
                <div className="profile__body">
                    <div onClick={() => setModalActive(!modalActive)} >Редактировать профиль</div>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <div>
                            <input type="file" onChange={handleChangeFile} />
                            <input
                                type="text"
                                placeholder={'Введите новое имя'}
                                value={newFullName}
                                onChange={(e) => setNewFullName(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && _updateFullName()}
                            />
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
})

export default Profile;
