import React, { useState } from 'react';
import NavBar from '../navigation/NavBar';
//TODO:
const Layout = ({ children }) => {
    return (
        <div className="main-layout-wrapper">
            <NavBar>
            </NavBar>
            {children}
            <footer className='footer'>
                Datamed team 2022
        </footer>
        </div>
    );
}

export default Layout;