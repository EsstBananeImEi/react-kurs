import axios, { AxiosResponse, Method } from 'axios';
import { useCallback, useEffect, useState } from 'react';

export function bookApi<T>(method: Method, path: string, callback: (data: T) => void): void {
    const baseUrl = 'https://api3.angular-buch.com'

    axios({ method: method, url: `${baseUrl}${path}` })
        .then((response: AxiosResponse) => { callback(response.data) });
}

export function useBookApi<T>(method: Method, path: string): T | undefined {
    const [state, setState] = useState<T>()

    useEffect(() => {
        bookApi(method, path, setState)
    }, [method, path]);

    return state
}
