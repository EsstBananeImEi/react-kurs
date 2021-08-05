import React, { ReactElement } from 'react'

export default function LoadingSpinner(): ReactElement {

    return (
        <div className="ui active inverted dimmer">
            <div className="ui text loader massive">Lade BookShelf ...</div>
        </div>
    )
}
