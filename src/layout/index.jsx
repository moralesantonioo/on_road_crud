import React from 'react'
import { Navbar } from '../components/navbar'

export const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <main>{children}</main>
        </>
    )
}