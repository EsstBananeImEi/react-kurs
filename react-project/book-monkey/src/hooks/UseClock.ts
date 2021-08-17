import { useCallback, useState } from 'react'
import { MyDate } from '../shared/Types';


export function useClock(): [MyDate | undefined, () => void] {
    const [clock, setClock] = useState<MyDate>()

    const onClock = useCallback(() => {
        const date = new Date();

        const hours = ((date.getHours() + 11) % 12 + 1);
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;
        setClock({ hour, minute, second })
    }, [])

    return [clock, onClock]
}