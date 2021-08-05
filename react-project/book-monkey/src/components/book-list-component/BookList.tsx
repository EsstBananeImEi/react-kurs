import React, { ReactElement } from 'react'
import { books } from '../../shared/books'
import Book from '../../types/Book'
import BookListItem from '../book-list-item-component/BookListItem'

export default function BookList(): ReactElement {
    return (
        <div className="ui middle aligned selection divided list">
            {books.map((book: Book) =>
                <BookListItem key={book.isbn} book={book} />
            )}
        </div>

    )
}
