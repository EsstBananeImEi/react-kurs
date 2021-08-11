import React, { ReactElement } from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar(): ReactElement {
    return (
        <div className='ui menu'>
            <NavLink to='/home' className='item'>Home</NavLink>
            <NavLink to='/books' className='item'>Bücher</NavLink>
            <NavLink to='/clock' className='item'>Uhr</NavLink>
        </div>
    )
}