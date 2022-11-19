import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhotoUser from '../../assets/images/photoUser.jpg'
import { Logouta } from '../../redux/auth-reducer';
import Profile from '../profile/Profile';
import SkeletonHeader from '../skeletons/SkeletonHeader';


const SidebarHeader = React.memo(({ isLoading }) => {
    const [active, setActive] = useState(false)

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(Logouta())
    }

    return (
        <div className='sidebar__header header-sidebar' >
            {isLoading
                ? <SkeletonHeader />
                : <>
                    <img src={PhotoUser} className='header-sidebar__img' />
                    <div className="header-sidebar__username" onClick={() => setActive(true)} >Serega Pl1m</div>
                    <span className='header-sidebar__logout _icon-logout' onClick={logout} ></span>
                    {active && <Profile setActive={setActive} />}
                </>
            }
        </div>
    );
})

export default SidebarHeader;
