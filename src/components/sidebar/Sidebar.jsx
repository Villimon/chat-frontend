import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getDialogs } from '../../redux/dialogs-reducer';
import { deleteUsersAction, getUsers, getUsersFromSearch } from '../../redux/sidebar-reducer';
import Dialogs from '../dialogs/Dialogs';
import SidebarHeader from './SidebarHeader';



const Sidebar = React.memo(({ setIsAuth }) => {
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [tagCount, setTagCount] = useState(0)



    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();



    const searchUser = () => {
        navigate({
            pathname: '/',
            search: `?term=${searchValue}`
        });
        setCount(count + 1)
        setSearchValue('')
    }

    useEffect(() => {
        const query = new URLSearchParams(location.search);

        const querySection = query.get("term");

        if (querySection) {
            setIsLoading(true)
            dispatch(getUsersFromSearch(querySection))
                .then(() => setIsLoading(false))
        }
    }, [count]);




    // useEffect(() => {
    // setIsLoading(true)
    // dispatch(getUsers())
    // .then(() => setIsLoading(false))
    // }, [])


    const toBack = (num) => {
        const query = new URLSearchParams(location.search);
        const querySection = query.get("term");
        setTagCount(num)
        //Вернуть эту провреку, а то при переключение между вклаждками друзья - диалоги, обновляется тсраница
        // if (querySection) {
        navigate({ pathname: '/' });
        setIsLoading(true)
        dispatch(deleteUsersAction())
        dispatch(getDialogs())
            .then(() => setIsLoading(false))
        // }
    }

    return (
        <div className='sidebar'>
            <SidebarHeader isLoading={isLoading} setIsAuth={setIsAuth} />
            <div className='sidebar__search'>
                <input
                    type="text"
                    className="sidebar__input"
                    placeholder='Поиск'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && searchUser()}
                />
            </div>
            <div className='sidebar__tags'>
                <span className={tagCount === 0 ? 'sidebar__icons _icon-message active' : 'sidebar__icons _icon-message'} onClick={() => toBack(0)} ></span>
                <span className={tagCount === 1 ? 'sidebar__icons _icon-friends active' : 'sidebar__icons _icon-friends'} onClick={() => toBack(1)} ></span>
            </div>
            <Dialogs
                tagCount={tagCount}
                searchValue={searchValue}
                isLoading={isLoading}
            />
        </div>
    );
})

export default Sidebar;
