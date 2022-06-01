import React from 'react';
import { NavbarStyle, ButonLogout } from '../../styles/navbar.style'

export const Navbar = () => {
    const logout = () => {
        window.localStorage.removeItem('token');
        document.location.replace("/")
    }

    return(
        <NavbarStyle>
            <span>usuario 1</span>
            <ButonLogout onClick={logout}>logout</ButonLogout>
        </NavbarStyle>
    )
}