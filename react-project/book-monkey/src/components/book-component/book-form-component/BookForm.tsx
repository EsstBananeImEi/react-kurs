import { Method } from 'axios'
import React, { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { bookApi } from '../../../hooks/BookApi'
import { ThumbnailModel } from '../../../models/Book'
import css from './BookForm.module.css'

interface Props {
    id?: number
    isbn: string,
    title: string,
    authors: string[],
    published: string,
    isEdit: boolean,
    // rating, subtitle, thumbnails and descrption only Available if isEdit equals true
    rating?: string,
    subtitle?: string,
    thumbnails?: ThumbnailModel[],
    description?: string
}

export default function BookForm(props: Props): ReactElement {
    const buildThumbnails = () => ({ url: '', title: '' })
    const buildAuthors = () => ''
    const history = useHistory()

    const [id, setId] = useState(props.id)
    const [isbn, setIsbn] = useState(props.isbn)
    const [title, setTitle] = useState(props.title)
    const [authors, setAuthors] = useState(props.authors)
    const [subtitle, setSubtitle] = useState(props.subtitle ? props.subtitle : '')
    const [rating, setRating] = useState(props.rating ? props.rating : 0)
    const [thumbnails, setThumbnails] = useState(props.thumbnails ? props.thumbnails : [buildThumbnails()])
    const [description, setDescription] = useState(props.description ? props.description : '')
    const [published, setPublished] = useState(props.published)

    const onGoToList = () => history.push('/books')
    const onGoToDetails = () => history.push(`/books/${id}`)

    const getBook = () => {
        return { id, isbn, title, authors, subtitle, thumbnails, description, published, rating }
    }

    const getBookApiParameters = (): [Method, string, () => void] => {
        if (props.isEdit) {
            return ['PUT', `/books/${id}`, onGoToDetails]
        }
        return ['POST', `/books/`, onGoToList]
    }

    const onSubmit = (e: React.FormEvent) => {
        const [method, route, onGoFunc] = getBookApiParameters()

        e.preventDefault()
        bookApi(method, route, onGoFunc, getBook())
    }

    const onAddAuthor = () => setAuthors(currentAuthors => [...currentAuthors, buildAuthors()])
    const onAddThumbnail = () => setThumbnails(currentThumbnails => [...currentThumbnails, buildThumbnails()])

    const onRemoveAuthor = () => {
        setAuthors(currentAuthors => {
            const newAuthors = [...currentAuthors]
            newAuthors.length > 1 && newAuthors.pop()
            return newAuthors
        })
    }

    const onRemoveThumbnail = () => {
        setThumbnails(currentThumbnails => {
            const newThumbnails = [...currentThumbnails]
            newThumbnails.length > 1 && newThumbnails.pop()
            return newThumbnails
        })
    }

    const onChangeAuthors = (index: number, value: string) => {
        setAuthors(currentAuthors => {
            const newAuthors = [...currentAuthors]
            newAuthors[index] = value
            return newAuthors
        })
    }

    const onChangeThumbnail = (index: number, key: string, value: string) => {
        setThumbnails(currentThumbnails => {
            const newThumbnails = [...currentThumbnails]
            newThumbnails[index] = { ...newThumbnails[index], [key]: value }
            return newThumbnails
        })
    }

    return (
        <form className={`ui form ${css.bookForm}`} onSubmit={onSubmit}>
            <label>Buchtitel</label>
            <input placeholder="Titel" value={title} required onChange={(e) => setTitle(e.target.value)} />

            <label>Untertitel</label>
            <input placeholder="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />

            <label>Isbn</label>
            <input type='number' pattern="\d{9}|\d{11}" required disabled={props.isEdit} placeholder="Isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} />

            <label>Erscheinungsdatum</label>
            <input placeholder="Published" value={published} required type="date" onChange={(e) => setPublished(e.target.value)} />

            <label>Authoren</label>
            <button onClick={onAddAuthor} className="ui mini button" type="button">+</button>
            <button disabled={authors.length === 1} onClick={onRemoveAuthor} className="ui mini button" type="button">-</button>
            {authors.map((author, index) =>
                <div key={index} className="fields">
                    <div className="sixteen wide field">
                        <input value={author} required placeholder="author" onChange={(e) => onChangeAuthors(index, e.target.value)} />
                    </div>
                </div>
            )}

            <label>Beschreibung</label>
            <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

            <label>Bilder</label>
            <button onClick={onAddThumbnail} className="ui mini button" type="button">+</button>
            <button disabled={thumbnails.length === 1} onClick={onRemoveThumbnail} className="ui mini button" type="button">-</button>
            {thumbnails.map((thumbnail, index) =>
                <div key={index} className="field">
                    { /* 2 Inputs rendern, je fuer `title` und `url` */}
                    <input type='url' placeholder="Url" className="nine wide field" value={thumbnail.url} onChange={(e) => onChangeThumbnail(index, 'url', e.target.value)} />
                    <input placeholder="Titel" className="seven wide field" value={thumbnail.title} onChange={(e) => onChangeThumbnail(index, 'title', e.target.value)} />
                </div>
            )}

            <button className="ui button">Submit</button>
        </form >

    )
}
