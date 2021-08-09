import React, { ReactElement } from 'react'
import BookModel from '../../models/Book'

interface Props {
    book: BookModel
    onShowList: () => void
}



export default function BookDetail(props: Props): ReactElement {
    const book = props.book
    const onShowList = props.onShowList

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
            <h4>Beschreibung</h4>
            <p>{book.description}</p>
            <div className="ui small images">
                {book.thumbnails && book.thumbnails.length > 0
                    ? book.thumbnails
                        .map((thrumbnail, index) => <img key={index} alt={book.title} src={thrumbnail.url} />)
                    : false}
            </div>
            <button onClick={onShowList} className='ui button red' >zurück zur Buchliste</button>
        </div>
    )
}
