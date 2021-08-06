import React, { ReactElement, useState } from 'react';
import LoadingSpinner from './loading-spinner/LoadingSpinner';
import { books } from '../shared/books';
import BookModel from '../models/Book';
import BookList from './book-list-component/BookList';
import BookDetail from './book-detail-component/BookDetail';

type ViewState = 'listView' | 'detailView'

export default function App(): ReactElement {
    const [book, setBook] = useState<BookModel>()
    const [viewState, setViewState] = useState<ViewState>('listView')

    const onShowDetails = (bookParam: BookModel) => {
        setBook(bookParam)
        setViewState('detailView')
    }

    const onShowList = () => {
        setBook(undefined)
        setViewState('listView')
    }

    return (
        <div className="ui container">
            {books.length > 0
                ? (book
                    ? <BookDetail book={book} onShowList={onShowList} />
                    : <BookList onShowDetails={onShowDetails} />)
                : <LoadingSpinner />}
        </div>
    );

    // return (
    //     <div className="ui container">
    //         {books.length > 0
    //             ? (book && viewState == 'listView'
    //                 ? <BookList onShowDetails={onShowDetails} />
    //                 : <BookDetail book={book} onShowList={onShowList} />
    //             : <LoadingSpinner />
    //         }
    //     </div>
    // );
}

