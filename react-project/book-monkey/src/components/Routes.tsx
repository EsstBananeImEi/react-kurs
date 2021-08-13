import React, { ReactElement } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BookCreate from './book-component/book-create-component/BookCreate'
import BookDetail from './book-component/book-detail-component/BookDetail'
import BookEdit from './book-component/book-edit-component/BookEdit'
import BookForm from './book-component/book-form-component/BookForm'
import BookList from './book-component/book-list-component/BookList'
import Clock from './clock-component/Clock'
import Home from './home-component/Home'
import BatteryComponent from './misc-components/BatteryComponent'

export default function Routes(): ReactElement {
    return (
        <Switch>
            <Route path='/books/:id/edit'>
                <BookEdit />
            </Route>
            <Route path='/books/new'>
                <BookCreate />
            </Route>
            <Route path='/books/:id'>
                <BookDetail />
            </Route>
            <Route path='/books'>
                <BookList />
            </Route>
            <Route path='/misc'>
                <BatteryComponent />
            </Route>
            <Route path='/clock'>
                <Clock />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
            <Route path='/'>
                <Redirect to="/home" />
            </Route>
        </Switch>
    )
}
