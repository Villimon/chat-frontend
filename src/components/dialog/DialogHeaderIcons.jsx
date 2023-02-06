import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, unfollow } from '../../redux/auth-reducer';

const DialogHeaderIcons = React.memo(({ setDropdawnActive, dropdawnActive, params }) => {
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const myFriends = useSelector((state) => state.auth.data.friends.filter(f => f._id === params.dialogId))


    const followUnfollowFlow = (callback) => {
        setIsLoading(true)
        dispatch(callback(params.dialogId))
            .then(() => setIsLoading(false))
    }



    return (
        <div className='header-dialog__icons'>
            {myFriends.length
                ? <span className={isLoading
                    ?
                    "header-dialog__icon disabled _icon-person-delete"
                    :
                    "header-dialog__icon _icon-person-delete"
                } onClick={() => followUnfollowFlow(unfollow)} ></span>
                : <span className={isLoading
                    ?
                    "header-dialog__icon disabled _icon-person-add"
                    :
                    "header-dialog__icon _icon-person-add"
                } onClick={() => followUnfollowFlow(follow)} ></span>
            }
            <span className="header-dialog__icon _icon-search"></span>
            <span className="header-dialog__icon _icon-phone"></span>
            <span
                onClick={() => setDropdawnActive(!dropdawnActive)}
                className="header-dialog__icon _icon-more"></span>
        </div>
    );
})

export default DialogHeaderIcons;
