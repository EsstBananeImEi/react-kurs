import React, { ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BookDetail from './book-component/book-detail-component/BookDetail'
import BookList from './book-component/book-list-component/BookList'
import Clock from './clock-component/Clock'
import Home from './home-component/Home'

export default function Routes(): ReactElement {
    return (
        <Switch>
            <Route path='/react-kurs/home'>
                <Home />
            </Route>
            <Route path='/react-kurs/books/:isbn'>
                <BookDetail />
            </Route>
            <Route path='/react-kurs//books'>
                <BookList />
            </Route>
            <Route path='/react-kurs/clock'>
                <Clock />
            </Route>
            <Route path='/react-kurs/'>
                <Redirect to="/react-kurs/home" />
            </Route>
        </Switch>
    )
}
