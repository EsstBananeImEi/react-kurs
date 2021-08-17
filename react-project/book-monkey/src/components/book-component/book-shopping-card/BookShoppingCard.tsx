import React, { ReactElement, SyntheticEvent } from 'react'
import { Message } from 'semantic-ui-react'
import BookModel from '../../../shared/BookModel'
import { Action, useStore } from '../../../Store'
import BookListItem from '../book-list-item-component/BookListItem'

export default function BookShoppingCard(): ReactElement {
    const { store, dispatch } = useStore()
    const onChangeCount = (event: SyntheticEvent, action: Action): void => {
        event.preventDefault()
        dispatch(action)
    }

    const onClear = (action: Action): void => {
        dispatch(action)
    }

    const books = store.shoppingCard.reduce((acc: BookModel[], book) => {
        acc.find(book_ => book_.isbn === book.isbn) || acc.push(book)
        return acc
    }, [])
        .sort((bookA, bookB) => Number(bookA.isbn) - Number(bookB.isbn))

    const countBooks = (id: number) => {
        return store.shoppingCard.filter(book => book.id === id).length
    }

    return (
        <div className="ui middle aligned selection divided list">
            {store.shoppingCard.length !== 0
                ? books.map(book =>
                    <BookListItem key={book.id} book={book}>
                        <div className="right floated content">
                            <div className="ui buttons">
                                <label className="ui button">
                                    <i className="shopping cart icon" />
                                    {countBooks(book.id)}
                                </label>
                                <button className="ui button green" onClick={(e) => onChangeCount(e, { type: 'ADD_TO_CARD', book })}>Add One</button>
                                <button className="ui button red" onClick={(e) => onChangeCount(e, { type: 'REMOVE_FROM_CARD', book })}>Remove One</button>
                            </div>

                        </div>
                    </BookListItem>)
                : <Message className='red'
                    icon='shopping cart'
                    header='Der Warenkorb ist leer!'
                    content='Lege dir doch ein paar bücher hinein :)'
                />
            }
            <div>

                {books.length > 0
                    && <label onClick={(e) => onChangeCount(e, { type: 'CLEAR_CARD' })} className="ui button">
                        <i className="trash alternate icon red" /> Warenkorb Löschen
                    </label>}

            </div>
        </div>
    )
}
