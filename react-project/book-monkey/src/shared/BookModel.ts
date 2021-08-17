interface BookModelWithoutDate {
    id: number;
    isbn: string;
    title: string;
    authors: string[];
    subtitle?: string;
    rating?: number;
    thumbnails?: ThumbnailModel[];
    description?: string;
}

export interface ThumbnailModel {
    url: string;
    title?: string;
}

export default interface BookModel extends BookModelWithoutDate {
    published: Date;
}

interface ResponseBookModel extends BookModelWithoutDate {
    published: string;
}

export function isBook(book: ResponseBookModel): book is ResponseBookModel {
    return !!(typeof book === 'object' && book.isbn && book.title && book.authors && book.published)
}

export function factoryRawToBook(book: ResponseBookModel): BookModel {
    return { ...book, published: new Date(book.published) }
}