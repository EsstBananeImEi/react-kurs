import React, { ReactElement } from 'react'
import BookModel from '../../../shared/BookModel'
import { bookApi, useBookApi } from '../../../hooks/BookApi'
import LoadingSpinner from '../../loading-spinner/LoadingSpinner'
import BookListItem from '../book-list-item-component/BookListItem'


function BookList(): ReactElement {
    const [books, setBooks] = useBookApi<BookModel[]>('GET', '/books')

    if (!books) { return <LoadingSpinner message="Buchliste ..." /> }

    const onReset = (): void => {
        bookApi<string>('DELETE', '/books', () => {
            bookApi<BookModel[]>('GET', '/books', setBooks)
        })
    }

    return (
        <div className="ui middle aligned selection divided list">
            {books.length !== 0
                ? books.map((book: BookModel) =>
                    <BookListItem key={book.id} book={book} />)
                :
                <>
                    <div className="ui message red">
                        <div className="header">
                            <p>Es wurden keine Bücher gefunden</p>
                            <button className="ui button red" onClick={onReset}><i className='sync alternate icon'></i>Zurücksetzen</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default BookList;