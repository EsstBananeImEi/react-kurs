import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner';
import BookList from './components/book-list-component/BookList';
import { books } from './shared/books';

function App(): ReactElement {
    return (
        <>
            {books.length !== 0 ? <BookList /> : <LoadingSpinner />}
        </>
    );
}

export default App;
