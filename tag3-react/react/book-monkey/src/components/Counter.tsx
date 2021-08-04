import React, { ReactElement } from 'react'

interface Props {
    startValue: number
}

export default function Counter(props: Props): ReactElement {
    return (
        <div>
            Hello Counter {JSON.stringify(props)}
        </div>
    )

}