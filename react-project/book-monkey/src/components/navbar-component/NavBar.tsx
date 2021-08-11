import React, { ReactElement } from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar(): ReactElement {
    return (
        <div className='ui menu'>
            <NavLink to='/react-kurs' className='item'>Home</NavLink>
            <NavLink to='/react-kurs/books' className='item'>Bücher</NavLink>
            <NavLink to='/react-kurs/clock' className='item'>Uhr</NavLink>
        </div>
    )
}