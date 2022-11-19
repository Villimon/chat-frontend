import React from 'react';
import { NavLink } from 'react-router-dom';
import PhotoUser from '../../assets/images/photoUser.jpg'



const User = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <NavLink to={path} className="dialogs-sidebar__item item-dialogs-sidebar ">
            <img className="item-dialogs-sidebar__img" src={PhotoUser} />
            <div className="item-dialogs-sidebar__user">
                <h3 className="item-dialogs-sidebar__name">{props.name}</h3>
                <h5 className="item-dialogs-sidebar__message">{props.message}</h5>
            </div>
        </NavLink>
    );
}

export default User;
