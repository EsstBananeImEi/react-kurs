
import React, { ReactElement } from 'react'
import { Link } from "react-router-dom"
import { useBattery } from 'react-use'

export default function Home(): ReactElement {
    const batteryState = useBattery()
    return (
        <>
            <h1>Home</h1>
            <p>Das ist der BookMonkey in React</p>
            <Link to='books' className='ui red button'>Buchliste ansehen<i className='right arrow icon'></i></Link>
            {/* <span>{(batteryState.level * 100).toFixed(0)}%</span> */}
            {/* <h2>Suche</h2>
            <div className='ui icon input'>
                <input type="text" className='prompt'></input>
                <i className='search icon'>...</i>

            </div> */}
        </>
    )
}