import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotoUser from '../../assets/images/photoUser.jpg'
import { logout } from '../../redux/auth-reducer';
import Profile from '../profile/Profile';
import SkeletonHeader from '../skeletons/SkeletonHeader';


const SidebarHeader = React.memo(({ isLoading }) => {
    const [active, setActive] = useState(false)

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.data)


    const _logout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
    }

    return (
        <div className='sidebar__header header-sidebar' >
            {isLoading
                ? <SkeletonHeader />
                : <>
                    <img src={user.avatarUrl ? `http://localhost:3003${user.avatarUrl}` : PhotoUser} className='header-sidebar__img' />
                    <div className="header-sidebar__username" onClick={() => setActive(true)} >{user.fullName[0].toUpperCase() + user.fullName.slice(1)}</div>
                    <span className='header-sidebar__logout _icon-logout' onClick={_logout} ></span>
                    {active && <Profile user={user} setActive={setActive} />}
                </>
            }
        </div>
    );
})

export default SidebarHeader;
