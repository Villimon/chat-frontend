import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dialogsAPI } from '../../api/api';
import { getDialogs } from '../../redux/dialogs-reducer';
import { getUsers } from '../../redux/sidebar-reducer';
import SkeletonDialogs from '../skeletons/SkeletonDialogs';
import User from './User';
import socket from '../../api/socket';



const Dialogs = React.memo(({ searchValue, isLoading, tagCount }) => {


    const dispatch = useDispatch()
    const users = useSelector((state) => state.sidebar.users)
    const friends = useSelector((state) => state.auth.data.friends)
    const myId = useSelector((state) => state.auth.data._id)
    const dialogs = useSelector((state) => state.dialogs.dialogs)




    const onNewDialog = () => {
        dispatch(getDialogs())
    }

    useEffect(() => {
        dispatch(getDialogs())

        socket.on('DIALOG_CREATED', onNewDialog)
        socket.on('NEW:MESSAGE', onNewDialog)
        return () => {
            socket.removeListener('DIALOG_CREATED', onNewDialog)
            socket.removeListener('NEW:MESSAGE', onNewDialog)
        }
    }, [])




    return (
        <div className='sidebar__dialogs dialogs-sidebar'>
            {
                !users.length
                    ? <div className="dialogs-sidebar__body">
                        {isLoading
                            ? <>
                                <SkeletonDialogs />
                                <SkeletonDialogs />
                                <SkeletonDialogs />
                                <SkeletonDialogs />
                                <SkeletonDialogs />
                            </>
                            : <>    {tagCount === 0
                                &&
                                <>  {dialogs ? dialogs
                                    .filter((user) => {
                                        return user.partner.fullName.toLowerCase().includes(searchValue.toLowerCase())
                                    })
                                    .map((user) => <User
                                        key={user._id}
                                        id={myId === user.author._id ? user.partner._id : user.author._id}
                                        image={myId === user.author._id ? user.partner.avatarUrl : user.author.avatarUrl}
                                        name={myId === user.author._id ? user.partner.fullName : user.author.fullName}
                                        message={user.lastMessage.text}
                                    />)
                                    : <h2 style={{ textAlign: 'center', marginTop: 10 }}>Список диалогов пуст</h2>
                                }
                                </>

                            }
                                <>  {tagCount === 1 && <>  {friends.length ? friends
                                    .filter((user) => {
                                        return user.fullName.toLowerCase().includes(searchValue.toLowerCase())
                                    })
                                    .map((user) => <User
                                        key={user._id}
                                        id={user._id}
                                        image={user.avatarUrl}
                                        name={user.fullName}
                                        message={user.message}
                                    />)
                                    : <h2 style={{ textAlign: 'center', marginTop: 10 }}>Список друзей пуст</h2>
                                }
                                </>
                                }</>
                            </>
                        }

                    </div>
                    : users ? users
                        .map((user) => <User
                            key={user._id}
                            id={user._id}
                            image={user.avatarUrl}
                            name={user.fullName}
                        />)
                        : <h2 style={{ textAlign: 'center', marginTop: 10 }}>Ничего не найдено</h2>
            }

        </div>
    );
})

export default Dialogs;
