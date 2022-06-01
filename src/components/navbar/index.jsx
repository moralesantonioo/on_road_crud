import React from 'react';
import { NavbarStyle, ButtonLogout } from '../../styles/navbar.style'

export const Navbar = () => {
    const logout = () => {
        window.localStorage.removeItem('token');
        document.location.replace("/")
    }

    return(
        <NavbarStyle>
            <div><b>USUARIO:</b> {window.localStorage.getItem('user')}</div>
            <ButtonLogout color="#f50" onClick={logout}>Cerrar Sessión</ButtonLogout>
        </NavbarStyle>
    )
}