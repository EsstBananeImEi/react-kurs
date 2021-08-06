import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from 'react-dom';
import BookModel from '../../models/Book';
import BookListItem from './BookListItem';

interface Props {
    book: BookModel
    onShowDetails: (book: BookModel) => void
}
const container: Props = {
    book: {
        isbn: '9783864906466',
        title: 'Angular',
        authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
        published: new Date(2019, 4, 30),
        subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx',
        rating: 5,
        thumbnails: [{
            url: 'https://ng-buch.de/buch1.jpg',
            title: 'Buchcover'
        }],
        description: 'Die Autoren führen Sie mit einem anspruchsvollen Beispielprojekt durch die Welt von Angular...'
    },
    onShowDetails: () => undefined
};

describe('Test Book List Item', () => {
    it('book title is visible', () => {
        render(<BookListItem book={container.book} onShowDetails={container.onShowDetails} />);
        const headerElement = screen.getByText(/Angular/i)
        expect(headerElement).toBeInTheDocument();
    });

    it('thrumbnail url is set', () => {
        render(<BookListItem book={container.book} onShowDetails={container.onShowDetails} />);
        const thrumbnailElement: HTMLElement = screen.getByAltText('Angular')
        expect(thrumbnailElement).toHaveAttribute('src', 'https://ng-buch.de/buch1.jpg')
    });

    it('description is visible', () => {
        const wrapper = render(<BookListItem book={container.book} onShowDetails={container.onShowDetails} />);
        const descriptionElement: HTMLCollectionOf<Element> = document.getElementsByClassName('description');
        expect(descriptionElement[0].innerHTML.toString()).toEqual('Grundlagen, fortgeschrittene Themen und Best Practices - mit NativeScript und NgRx')
    });

    it('authors are visible', () => {
        const wrapper = render(<BookListItem book={container.book} onShowDetails={container.onShowDetails} />);
        const metadataElement: HTMLElement | null = document.getElementById('metadata Johannes Hoppe');
        expect(metadataElement?.innerHTML.toString()).toEqual('Johannes Hoppe, ')
    });


})
