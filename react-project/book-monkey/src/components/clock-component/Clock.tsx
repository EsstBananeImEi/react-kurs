import React, { ReactElement, useState } from 'react'
import { useClock } from '../../hooks/UseClock';
import { useInterval } from '../../hooks/UseInterval';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import css from './Clock.module.css'

export default function Clock(): ReactElement {
    const [clock, onClock] = useClock()
    useInterval(onClock)

    if (!clock) { return <LoadingSpinner message={`Clock`} /> }

    return (
        <div className={css.body}>
            <div className={css.clock}>
                <div className={css.wrap}>
                    <span className={css.hour} style={{ transform: `rotate(${clock.hour}deg)` }}></span>
                    <span className={css.minute} style={{ transform: `rotate(${clock.minute}deg)` }}></span>
                    <span className={css.second} style={{ transform: `rotate(${clock.second}deg)` }}></span>
                    <span className={css.dot}></span>
                </div>
            </div>
        </div>
    )
}
