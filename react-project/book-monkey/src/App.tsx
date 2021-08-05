import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner';

function App(): ReactElement {
    return (
        <LoadingSpinner />
    );
}

export default App;
