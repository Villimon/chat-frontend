import React from 'react';
import { useSelector } from 'react-redux';
import SkeletonDialogs from '../skeletons/SkeletonDialogs';
import User from './User';




const Dialogs = React.memo(({ searchValue, isLoading }) => {

    const users = useSelector((state) => state.sidebar.users)
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
                            : <>  {users
                                .filter((user) => {
                                    return user.name.toLowerCase().includes(searchValue.toLowerCase())
                                })
                                .map((user) => <User
                                    key={user.id}
                                    id={user.id}
                                    image={user.image}
                                    name={user.name}
                                    message={user.message}
                                />)}
                            </>
                        }

                    </div>
                    : <h2 style={{ textAlign: 'center', marginTop: 10 }}>Список диалогов пуст</h2>
            }

        </div>
    );
})

export default Dialogs;
