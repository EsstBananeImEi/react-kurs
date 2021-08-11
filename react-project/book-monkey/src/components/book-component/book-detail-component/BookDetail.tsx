import React, { ReactElement } from 'react'
import { Link, useHistory, useParams } from "react-router-dom"
import BookModel from '../../../models/Book'
import { bookApi, useBookApi } from '../../../hooks/BookApi'
import LoadingSpinner from '../../loading-spinner/LoadingSpinner'
import './BookDetail.css'

export default function BookDetail(): ReactElement {
    const { isbn } = useParams<{ isbn: string }>()
    const history = useHistory()
    const [book] = useBookApi<BookModel>('GET', `/book/${isbn}`)

    if (!book) { return <LoadingSpinner message={`Buch ${isbn}`} /> }

    const onGoToList = () => history.push('/react-kurs/books')
    const onDelete = () => bookApi('DELETE', `/book/${isbn}`, onGoToList)

    return (
        <div className='ui raised padded container segment'>
            <h1>{book.title}</h1>
            <h3>{book.subtitle}</h3>
            <div className="ui divider"></div>
            <div className='ui grid'>
                <div className="four wide column">
                    <h4>Authoren</h4>
                    {book.authors
                        .map((author, index) => <p key={index} >{author}</p>)}
                </div>
                <div className="four wide column">
                    <h4>ISBN</h4>
                    {book.isbn}
                </div>
                <div className="four wide column">
                    <h4>Erschienen</h4>
                    {book.published.toLocaleDateString()}
                </div>
                <div className="four wide column">
                    <h4>Rating</h4>
                    {new Array(book.rating)
                        .fill(true)
                        .map((number, index) => <i key={index} className='yellow star icon' />
                        )}
                </div>
            </div>
            <h4 style={{ marginTop: 20 }}>Beschreibung</h4>
            <p>{book.description}</p>
            <div className="ui small images">
                {book.thumbnails && book.thumbnails.length > 0
                    ? book.thumbnails
                        .map((thrumbnail, index) => <img key={index} alt={book.title} src={thrumbnail.url} />)
                    : false}
            </div>
            <Link to='/react-kurs/books' className='ui button' >zurück zur Buchliste</Link>
            <button onClick={onDelete} className='ui button red' >Buch Löschen!</button>
        </div>
    )
}
