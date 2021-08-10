import axios, { AxiosResponse, Method } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { isArray } from 'lodash'
import BookModel, { ResponseBookModel, factoryRawToBook } from '../models/Book';

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

axios.interceptors.response.use(function (response) {

    if (!Array.isArray(response.data)) {
        response.data = factoryRawToBook(response.data)
    } else {
        const newData: BookModel[] = []
        response.data.map((book: ResponseBookModel) => newData.push(factoryRawToBook(book)))
        response.data = newData
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});