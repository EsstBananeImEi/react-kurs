import axios from 'axios';
import moment from 'moment';
import React, { ReactElement, useEffect, useState } from 'react'
import BookModel from '../../../models/Book'

interface Props {
    book: BookModel
    onShowDetails: (book: BookModel) => void
}


export default function BookEdit(props: Props): ReactElement {
    const book = props.book
    const onShowDetails = props.onShowDetails
    const [title, setTitle] = useState(book.title);
    const [subTitle, setSubTitle] = useState(book.subtitle);
    const [ISBN, setISBN] = useState(book.isbn);
    const [publishedDate, setPublishedDate] = useState(moment(book.published).format('YYYY-MM-DD'));
    const [author, setAuthor] = useState<string>();
    const [description, setDescription] = useState(book.description);
    const [url, setUrl] = useState<string>();
    const [titelCover, setTitleCover] = useState<string>();

    console.log(book.authors)

    const onSave = () => {
        axios({
            method: 'PUT',
            url: `https://api3.angular-buch.com/book/${book.isbn}`,
            data: {
                "isbn": `${ISBN}`,
                "title": `${title}`,
                "authors":
                    `${[book.authors.join(',')]}`
                ,
                "published": `${publishedDate}`,
                "subtitle": `${subTitle}`,
                "rating": 5,
                "thumbnails":
                    `${book.thumbnails}`
                ,
                "description": `${description}`
            }
        }).then(() => {
            onShowDetails(book)
        })
    }

    const onChangeTitle = (text: string) => { setTitle(text) }
    const onChangeSubTitle = (text: string) => { setSubTitle(text) }
    const onChangeISBN = (text: string) => { setISBN(text) }
    const onChangePublishedDate = (date: string) => { setPublishedDate(moment(date).format('YYYY-MM-DD')) }
    const onChangeAutor = (author: string) => { setAuthor(author) }
    const onChangeDescription = (desc: string) => { setDescription(desc) }
    const onChangeUrl = (url: string) => { setUrl(url) }
    const onChangeCover = (titel: string) => { setTitleCover(titel) }


    return (
        <div className='ui raised padded container segment'>
            <h1>Buch bearbeiten</h1>

            <form className='ui form ng-untouched ng-pristine ng-invalid'>
                <label>Buchtitel</label>
                <input type="text" name="title" value={title} onChange={(e) => onChangeTitle(e.target.value)} />

                <label>Untertitel</label>
                <input type="text" name="subTitle" value={subTitle} onChange={(e) => onChangeSubTitle(e.target.value)} />

                <label>ISBN</label>
                <input type="text" name="isbn" value={ISBN} onChange={(e) => onChangeISBN(e.target.value)} />

                <label>Erscheinungsdatum</label>
                <input type="date" name="publishedDate" value={publishedDate} onChange={(e) => onChangePublishedDate(e.target.value)} />

                <label>Autoren</label>
                <button className='ui mini button'>+ Autor</button>
                <div className='fields ng-pristine ng-valid ng-touched'>
                    {book.authors.map((autor, index) =>
                        <div key={index} className='sixteen wide field'>
                            <input type="text" value={autor} onChange={(e) => onChangeAutor(e.target.value)} />
                        </div>
                    )}
                </div>

                <label>Beschreibung</label>
                <textarea className='ng-untouched ng-pristine ng-valid' value={description} onChange={(e) => onChangeDescription(e.target.value)} />

                <label>Bilder</label>
                <button className='ui mini button'>+ Bild</button>
                {book.thumbnails &&
                    book.thumbnails.map((thumbnail, index) =>
                        <div key={index} className='fields ng-untouched ng-pristine ng-valid'>
                            <div className='nine wide field'>
                                <input className='ng-untouched ng-pristine ng-valid' type="text" name="url" value={thumbnail.url} onChange={(e) => onChangeUrl(e.target.value)} />

                            </div>
                            <div className='seven wide field'>
                                <input className='ng-untouched ng-pristine ng-valid' type="text" name="titelCover" value={thumbnail.title} onChange={(e) => onChangeCover(e.target.value)} />

                            </div>

                        </div>
                    )}

            </form>
            <button onClick={onSave} className='ui button green'>Speichern</button>
            <button onClick={() => onShowDetails(book)} className='ui button' >zurück</button>
        </div>
    )
}
