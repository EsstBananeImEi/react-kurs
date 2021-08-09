import React, { ReactElement, useState } from 'react';
import BookModel from '../models/Book';
import BookList from './book-component/book-list-component/BookList';
import BookDetail from './book-component/book-detail-component/BookDetail';
import NavBar from './navigation-component/NavBar';
import BookEdit from './book-component/book-edit-component/BookEdit';
import Home from './home-component/Home';

type ViewState = 'listView' | 'detailView' | 'editView' | 'homeView'

export default function App(): ReactElement {
    const [book, setBook] = useState<BookModel>()
    const [viewState, setViewState] = useState<ViewState>('homeView')

    const onShowDetails = (bookParam: BookModel) => {
        setBook(bookParam)
        setViewState('detailView')
    }

    const onShowList = () => {
        setBook(undefined)
        setViewState('listView')
    }

    const onEdit = (bookParam: BookModel) => {
        setBook(bookParam)
        setViewState('editView')
    }

    const onHome = () => {
        setBook(undefined)
        setViewState('homeView')
    }

    return (
        <div className="ui container">
            <NavBar onHome={onHome} onShowList={onShowList} />
            {(!book && viewState === 'homeView'
                ? <Home onShowList={onShowList} />
                : book && viewState === 'detailView'
                    ? <BookDetail book={book} onShowList={onShowList} onEdit={onEdit} />
                    : book && viewState === 'editView'
                        ? <BookEdit book={book} onShowDetails={onShowDetails} />
                        : <BookList onShowDetails={onShowDetails} />
            )}
        </div>
    );
}

