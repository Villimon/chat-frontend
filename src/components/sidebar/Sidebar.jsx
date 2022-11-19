import React from 'react';
import { useState } from 'react';
import Dialogs from '../dialogs/Dialogs';
import SidebarHeader from './SidebarHeader';



const Sidebar = React.memo(({ setIsAuth }) => {
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)


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
                />
            </div>
            <Dialogs
                searchValue={searchValue}
                isLoading={isLoading}
            />
        </div>
    );
})

export default Sidebar;
