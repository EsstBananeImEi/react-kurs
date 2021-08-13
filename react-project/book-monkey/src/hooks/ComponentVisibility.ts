import { useState, useEffect, useRef } from 'react';
import { ComponentVisible } from '../types/Types';

export default function ComponentVisiblity(): ComponentVisible {
    const [isComponentVisible, setIsComponentVisible] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsComponentVisible(false);
        }
    };

    const handleClickInsite = (event: Event) => {
        if (ref.current && ref.current.contains(event.target as Node)) {
            setIsComponentVisible(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('click', handleClickInsite, true);
    }, []);

    return [ref, isComponentVisible, setIsComponentVisible]
}