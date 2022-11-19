import React from 'react';
import PhotoUser from '../../assets/images/photoUser.jpg'



const Profile = React.memo(({ setActive }) => {


    return (
        <div className='profile active' onClick={() => setActive(false)}>
            <div className='profile__content active' onClick={e => e.stopPropagation()} >
                <div className="profile__top">
                    <img src={PhotoUser} alt="" className="profile__img" />
                    <h4 className="profile__name">Сидоров Олег Сергеевич</h4>
                </div>
                <div className="profile__body">На потом</div>
            </div>
        </div>
    );
})

export default Profile;
