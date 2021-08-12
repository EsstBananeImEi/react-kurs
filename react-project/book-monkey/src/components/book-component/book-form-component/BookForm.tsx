import React, { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { bookApi } from '../../../hooks/BookApi'
import BookModel from '../../../models/Book'

export default function BookForm(): ReactElement {
    const buildThumbnails = () => ({ url: '', title: '' })
    const buildAuthors = () => ''
    const history = useHistory()

    const [isbn, setIsbn] = useState('')
    const [title, setTitle] = useState('')
    const [authors, setAuthors] = useState([buildAuthors()])
    const [subtitle, setSubtitle] = useState('')
    const [thumbnails, setThumbnails] = useState([buildThumbnails()])
    const [description, setDescription] = useState('')
    const [published, setPublished] = useState('')

    const onGoToList = () => history.push('/books')

    const getBook = () => {
        return { isbn, title, authors, subtitle, thumbnails, description, published, rating: 0 }
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        bookApi('POST', `/book`, onGoToList, getBook())
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
        <form className="ui form" onSubmit={onSubmit}>
            <label>Buchtitel</label>
            <input placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Untertitel</label>
            <input placeholder="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />

            <label>Isbn</label>
            <input placeholder="Isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} />

            <label>Erscheinungsdatum</label>
            <input placeholder="Published" value={published} type="date" onChange={(e) => setPublished(e.target.value)} />

            <label>Authoren</label>
            <button onClick={onAddAuthor} className="ui mini button" type="button">+</button>
            <button disabled={authors.length === 1} onClick={onRemoveAuthor} className="ui mini button" type="button">-</button>
            {authors.map((author, index) =>
                <div key={index} className="fields">
                    <div className="sixteen wide field">
                        <input value={author} placeholder="author" onChange={(e) => onChangeAuthors(index, e.target.value)} />
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
                    <input placeholder="Url" className="nine wide field" value={thumbnail.url} onChange={(e) => onChangeThumbnail(index, 'url', e.target.value)} />
                    <input placeholder="Titel" className="seven wide field" value={thumbnail.title} onChange={(e) => onChangeThumbnail(index, 'title', e.target.value)} />
                </div>
            )}

            <button className="ui button">Submit</button>
        </form >

    )
}
