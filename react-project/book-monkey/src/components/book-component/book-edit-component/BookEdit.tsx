import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useBookApi } from '../../../hooks/BookApi';
import BookModel from '../../../shared/BookModel';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';
import BookForm from '../book-form-component/BookForm';


export default function BookEdit(): ReactElement {
    const { id } = useParams<{ id: string }>()
    const [book] = useBookApi<BookModel>('GET', `/books/${id}`)

    if (!book) {
        return <LoadingSpinner message={`Buch ${id}`} />
    }

    const publishedDateToString = (date: Date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getMonth()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    return (
        <BookForm id={book.id}
            isbn={book.isbn}
            title={book.title}
            authors={book.authors}
            subtitle={book.subtitle}
            rating={String(book.rating)}
            thumbnails={book.thumbnails}
            description={book.description}
            published={publishedDateToString(book.published)}
            isEdit={true} />
    )
}
