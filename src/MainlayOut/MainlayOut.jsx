import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';

const MainlayOut = () => {
    return (
        <div>
            <div className='static top-0  flex justify-center items-center'>
                <NavBar></NavBar>
            </div>
           <Outlet></Outlet>
        </div>
    );
};

export default MainlayOut;