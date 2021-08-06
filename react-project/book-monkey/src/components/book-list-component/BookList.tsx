import React, { ReactElement } from 'react'
import { books } from '../../shared/books'
import BookModel from '../../models/Book'
import BookListItem from '../book-list-item-component/BookListItem'

export default function BookList(): ReactElement {
    return (
        <div className="ui middle aligned selection divided list">
            {books.map((book: BookModel) =>
                <BookListItem key={book.isbn} book={book} />
            )}
        </div>

    )
}
