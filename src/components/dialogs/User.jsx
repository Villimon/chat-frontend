import React from 'react';
import { NavLink } from 'react-router-dom';
import PhotoUser from '../../assets/images/photoUser.jpg'



const User = (props) => {
    const path = '/dialogs/' + props.id


    return (
        <NavLink to={path} className="dialogs-sidebar__item item-dialogs-sidebar ">
            <img className="item-dialogs-sidebar__img" src={props.image ? `http://localhost:3003${props.image}` : PhotoUser} />
            <div className="item-dialogs-sidebar__user">
                <h3 className="item-dialogs-sidebar__name">{props.name[0].toUpperCase() + props.name.slice(1)}</h3>
                <h5 className="item-dialogs-sidebar__message">{props.message}</h5>
            </div>
        </NavLink>
    );
}

export default User;
