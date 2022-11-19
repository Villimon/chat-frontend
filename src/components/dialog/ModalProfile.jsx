import React from 'react';
import UserPhoto from '../../assets/images/photoUser.jpg'


const ModalProfile = React.memo(({ setModalActive }) => {
    return (
        <div className='modal-profile' >
            <div className="modal-profile__top">
                <h3 className="modal-profile__title">Информация</h3>
                <span className="modal-profile__icon-close _icon-close"
                    onClick={() => setModalActive(false)} ></span>
            </div>
            <div className="modal-profile__user">
                <img src={UserPhoto} alt="" className="modal-profile__image" />
                <div className="modal-profile__profile">
                    <h4 className="modal-profile__name">Сидоров Олег Сергеевич</h4>
                    <h5 className="modal-profile__online">был в сети недавно</h5>
                </div>
            </div>
            <div className="modal-profile__info">
                <span className="modal-profile__icon _icon-info"></span>
                <div className="modal-profile__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum repellat expedita enim provident laboriosam! Reprehenderit assumenda nisi blanditiis delectus necessitatibus quaerat amet, illum eos. Dolore qui quasi tenetur cumque.</div>
            </div>
            <div className="modal-profile__attachments">
                <span className="modal-profile__icon _icon-image"></span>
                <h5 className="modal-profile__lable">Вложения</h5>
            </div>
        </div>
    );
})

export default ModalProfile;
