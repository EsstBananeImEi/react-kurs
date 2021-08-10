import { AxiosResponse } from "axios";

export default interface BookModel {
    isbn: string;
    title: string;
    authors: string[];
    published: Date;
    subtitle?: string;
    rating?: number;
    thumbnails?: ThumbnailModel[];
    description?: string;
}

export interface ResponseBookModel {
    isbn: string;
    title: string;
    authors: string[];
    published: string;
    subtitle?: string;
    rating?: number;
    thumbnails?: ThumbnailModel[];
    description?: string;
}

export interface ThumbnailModel {
    url: string;
    title?: string;
}

export function factoryRawToBook(book: ResponseBookModel): BookModel {
    const newBook = {
        ...book,
        published: new Date(book.published)
    }
    return newBook
}