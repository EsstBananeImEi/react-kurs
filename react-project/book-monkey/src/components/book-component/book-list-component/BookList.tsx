import React, { ReactElement, useEffect, useState } from 'react'
import { message, Button, Space } from 'antd'
import BookModel from '../../../models/Book'
import BookListItem from '../book-list-item-component/BookListItem'
import axios, { AxiosResponse } from 'axios'
import LoadingSpinner from '../../loading-spinner/LoadingSpinner'
import { bookApi, useBookApi } from '../../../shared/BookApi'

interface Props {
    onShowDetails: (book: BookModel) => void
}

function BookList(props: Props): ReactElement {
    const [books, setBooks] = useBookApi<BookModel[]>('GET', '/books')

    if (!books) { return <LoadingSpinner message="Buchliste ..." /> }

    const getGooks = () => {
        bookApi('GET', '/books', setBooks)
    }

    const onReset = (): void => {
        bookApi('DELETE', '/books', getGooks)
    }


    return (
        <div className="ui middle aligned selection divided list">
            {books.length !== 0
                ? books.map((book: BookModel) =>
                    <BookListItem key={book.isbn} book={book} onShowDetails={props.onShowDetails} />)
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