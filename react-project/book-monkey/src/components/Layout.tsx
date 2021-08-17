import React, { ReactElement } from 'react'
import NavBar from './navbar-component/NavBar'

interface Props {
    children: ReactElement
}

export default function Layout(props: Props): ReactElement {

    return (
        <>
            <NavBar />
            <div className="ui container">
                {props.children}
            </div>
        </>
    )
}
