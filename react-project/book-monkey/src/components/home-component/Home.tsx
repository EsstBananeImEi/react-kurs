
import React, { ReactElement } from 'react'
import { Link } from "react-router-dom"
import { useBattery } from 'react-use'
import BookSearch from '../book-component/book-search-component/BookSearch'

export default function Home(): ReactElement {
    const batteryState = useBattery()
    console.log(batteryState)
    return (
        <>
            <h1>Home</h1>
            <p>Dies ist die BookMonkey umsetzung in React</p>
            <div>
                <Link to='books' className='ui red button'>Buchliste ansehen<i className='right arrow icon'></i></Link>
            </div>
            <br />
            <div>

                <BookSearch />
            </div>
        </>
    )
}