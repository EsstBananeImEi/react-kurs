import React, { ReactElement, useEffect, useState } from 'react'
import BookModel from '../../../models/Book'
import BookListItem from '../book-list-item-component/BookListItem'
import axios from 'axios'
import LoadingSpinner from '../../loading-spinner/LoadingSpinner'

interface Props {
    onShowDetails: (book: BookModel) => void
}

function BookList(props: Props): ReactElement {
    const [books, setBooks] = useState<BookModel[]>()

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api3.angular-buch.com/books'
        }).then(response => {
            setBooks(response.data);
        });
    }, []);

    if (!books) { return <LoadingSpinner /> }

    const onReset = (): void => {
        axios({
            method: 'DELETE',
            url: 'https://api3.angular-buch.com/books'
        }).then(() => {
            axios({
                method: 'GET',
                url: 'https://api3.angular-buch.com/books'
            }).then(response => {
                setBooks(response.data);
            });
        })
    }

    return (
        <div className="ui middle aligned selection divided list">
            {books.length !== 0
                ? books.map((book: BookModel) =>
                    <BookListItem key={book.isbn} book={book} onShowDetails={props.onShowDetails} />)
                :
                <><h3>Es wurden keine Bücher gefunden</h3>
                    <button onClick={onReset} className='ui button red' >Zurücksetzten</button></>
            }
        </div>

    )
}

export default BookList;