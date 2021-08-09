import React, { ReactElement } from 'react'

interface Props {
    onShowList: () => void
}

export default function Home(props: Props): ReactElement {
    const onShowList = props.onShowList

    return (
        <>
            <h1>Home</h1>
            <p>Das ist der BookMonkey in React</p>
            <button onClick={onShowList} className='ui red button'>Buchliste ansehen<i className='right arrow icon'></i></button>

            <h2>Suche</h2>
            <div className='ui icon input'>
                <input type="text" className='prompt'></input>
                <i className='search icon'>...</i>

            </div>
        </>
    )
}
