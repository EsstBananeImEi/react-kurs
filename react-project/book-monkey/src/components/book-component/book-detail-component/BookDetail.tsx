import axios, { AxiosResponse } from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import BookModel from '../../../models/Book'
import { bookApi, useBookApi } from '../../../shared/BookApi'
import LoadingSpinner from '../../loading-spinner/LoadingSpinner'

interface Props {
    book: BookModel
    onShowList: () => void
}

export default function BookDetail(props: Props): ReactElement {
    const onShowList = props.onShowList

    const book = useBookApi<BookModel>('GET', `/book/${props.book.isbn}`)
    const onDelete = () => bookApi('DELETE', `/book/${props.book.isbn}`, onShowList)

    if (!book) { return <LoadingSpinner message={`Buch ${props.book.isbn}`} /> }

    return (
        <div className='ui raised padded container segment'>
            <h1>{book.title}</h1>
            <h3>{book.subtitle}</h3>
            <div className="ui divider"></div>
            <div className="ui grid">
                <div className="four wide column">
                    <h4>Authoren</h4>
                    {book.authors
                        .map((author, index) => <p key={index} style={{ lineHeight: '0.5' }}>{author}</p>)}
                </div>
                <div className="four wide column">
                    <h4>ISBN</h4>
                    {book.isbn}
                </div>
                <div className="four wide column">
                    <h4>Erschienen</h4>
                    {new Date(book.published).toLocaleDateString()}
                </div>
                <div className="four wide column">
                    <h4>Rating</h4>
                    {new Array(book.rating)
                        .fill(true)
                        .map((number, index) => <i key={index} className='yellow star icon' />
                        )}
                </div>
            </div>
            <h4>Beschreibung</h4>
            <p>{book.description}</p>
            <div className="ui small images">
                {book.thumbnails && book.thumbnails.length > 0
                    ? book.thumbnails
                        .map((thrumbnail, index) => <img key={index} alt={book.title} src={thrumbnail.url} />)
                    : false}
            </div>
            <button onClick={onShowList} className='ui button' >zurück zur Buchliste</button>
            <button onClick={onDelete} className='ui button red' >Buch Löschen!</button>
        </div>
    )
}
