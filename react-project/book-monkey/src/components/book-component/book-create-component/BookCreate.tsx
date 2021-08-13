import React, { ReactElement } from 'react'
import BookForm from '../book-form-component/BookForm'

export default function BookCreate(): ReactElement {
    return (
        <BookForm isbn=''
            title=''
            authors={['']}
            published=''
            isEdit={false} />
    )
}
