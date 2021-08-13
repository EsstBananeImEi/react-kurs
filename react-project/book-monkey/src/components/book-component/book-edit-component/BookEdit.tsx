import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import BookForm from '../book-form-component/BookForm';


export default function BookEdit(): ReactElement {
    const { isbn } = useParams<{ isbn: string }>()
    return (
        <BookForm />
    )
}
