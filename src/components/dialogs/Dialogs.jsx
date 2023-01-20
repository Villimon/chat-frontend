import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/sidebar-reducer';
import SkeletonDialogs from '../skeletons/SkeletonDialogs';
import User from './User';




const Dialogs = React.memo(({ searchValue, isLoading, tagCount }) => {

    const dispatch = useDispatch()
    const users = useSelector((state) => state.sidebar.users)
    const friends = useSelector((state) => state.auth.data.friends)
    let arr = []


    for (let index = 0; index < friends.length; index++) {
        let asd = users.filter(user => user._id === friends[index]);
        arr.push(...asd)
    }

    console.log(users);


    return (
        <div className='sidebar__dialogs dialogs-sidebar'>
            {
                users
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
                                <>  {users.length ? users
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
                                    : <h2 style={{ textAlign: 'center', marginTop: 10 }}>Список диалогов пуст</h2>
                                }
                                </>

                            }
                                <>  {tagCount === 1 && <>  {arr.length ? arr
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
                    : <h2 style={{ textAlign: 'center', marginTop: 10 }}>Список диалогов пуст</h2>
            }

        </div>
    );
})

export default Dialogs;
