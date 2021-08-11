import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { isArray } from 'lodash'
import BookModel, { ResponseBookModel, factoryRawToBook } from '../models/Book';
import { message } from 'antd';
import '../index.css';
import { exit } from 'process';

type Setter<T> = (data: T) => void

export function bookApi<T>(method: Method, path: string, callback: Setter<T>, data = {}): void {
    message.config({ duration: 1.5 })
    const baseUrl = 'https://api3.angular-buch.com'

    axios({ method: method, url: `${baseUrl}${path}` })
        .catch(e =>
            message.error(`keine Verbindung zu ${baseUrl}${path}`))
        .then((response: AxiosResponse) => {
            callback(response.data)
            message.success(`SUCCESS ${method}`)
        })
}

export function useBookApi<T>(method: Method, path: string): [T | undefined, Setter<T>] {
    const [state, setState] = useState<T>()

    useEffect(() => {
        bookApi(method, path, setState)
    }, [method, path]);

    return [state, setState]
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