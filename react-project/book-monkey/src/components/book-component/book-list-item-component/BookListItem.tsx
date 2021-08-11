import React, { ReactElement } from 'react';
import BookModel from '../../../models/Book';
import { message, Button, Space } from 'antd';

interface Props {
    book: BookModel
    onShowDetails: (book: BookModel) => void
}

export default function BookListItem(props: Props): ReactElement {
    const book = props.book
    const onShowDetails = props.onShowDetails

    return (

        <div onClick={() => onShowDetails(book)} className="item ui raised padded container segment" key={book.isbn}>
            <img className="ui tiny image" alt={book.title} src={book.thumbnails && book.thumbnails.length > 0 ? book.thumbnails[0].url : ''} />
            <div className="content">
                <div className="header">{book.title}</div>
                <div className="description">{book.subtitle}</div>
                <div className="metadata">
                    {book.authors.map((author, index) =>
                        <span id={"metadata " + author} key={index}>
                            {author}
                            {index !== book.authors.length - 1 && ', '}
                        </span>
                    )}
                    <br />
                    ISBN {book.isbn}
                </div>
            </div>
        </div >

    )
}
