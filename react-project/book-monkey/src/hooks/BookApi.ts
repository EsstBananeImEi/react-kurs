import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { useEffect, useState } from 'react';
import BookModel, { factoryRawToBook, isBook } from '../models/Book';
import { message } from 'antd';
import '../index.css';
import { Setter } from '../types/Types';

export function bookApi<T>(method: Method, path: string, callback: Setter<T>, data = {}): void {
    message.config({ duration: 1.5 })
    const baseUrl = 'http://localhost:3004'

    axios({ method: method, url: `${baseUrl}${path}`, data })
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
    if (response.data) {
        if (!Array.isArray(response.data)) {
            response.data = factoryRawToBook(response.data)
        } else if (response.data.every(isBook)) {
            response.data = response.data.map((book) => factoryRawToBook(book))
        }
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});