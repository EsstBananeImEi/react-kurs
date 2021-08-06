import React, { ReactElement } from 'react';
import BookModel from '../../models/Book';
import css from './BookListItem.module.css';

interface Props {
    book: BookModel
}

export default function BookListItem(props: Props): ReactElement {
    const book = props.book
    return (
        <div className="item" key={book.isbn}>
            <img className="ui tiny image" alt={book.title} src={book.thumbnails[0].url} />
            <div className="content">
                <div className="header">{book.title}</div>
                <div className="description">{book.subtitle}</div>
                <div className="metadata">
                    {book.authors.map((author: string, index) =>
                        <span id={"metadata " + author} key={index}>{author} </span>
                    )}
                    <br />
                    ISBN {book.isbn}
                </div>
            </div>
        </div>
    )
}
