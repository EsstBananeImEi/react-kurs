import React, { ReactElement } from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar(): ReactElement {
    return (
        <div className='ui menu'>
            <NavLink to='/home' className='item'>Home</NavLink>
            <NavLink exact to='/books' className='item'>Bücher</NavLink>
            <NavLink to='/books/new' className='item'>Neues Buch Anlegen</NavLink>
            <NavLink to='/clock' className='item'>Uhr</NavLink>
            <NavLink to='/misc' className='item'>Misc</NavLink>
        </div>
    )
}