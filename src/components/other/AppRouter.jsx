import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './Home';
import Sidebar from '../sidebar/Sidebar';
import { useSelector } from 'react-redux';


const DialogLazy = React.lazy(() => import('../dialog/Dialog'))
const LoginLazy = React.lazy(() => import('./Login'))



const AppRouter = React.memo(() => {
    const isAuth = useSelector((state) => state.auth.isAuth)

    return (
        <>{isAuth
            ? <div className="app">
                <Sidebar />
                <Suspense fallback={<div>Loading...</div>} >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/dialogs' element={<DialogLazy />} />
                        <Route path='/dialogs/:dialogId' element={<DialogLazy />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </Suspense>

            </div>
            :
            <Suspense fallback={<div>Loading...</div>} >
                <Routes>
                    <Route path='/login' element={<LoginLazy />} />
                    <Route path='*' element={<Navigate to='/login' />} />
                </Routes>
            </Suspense>


        }</>


    );
})

export default AppRouter;
