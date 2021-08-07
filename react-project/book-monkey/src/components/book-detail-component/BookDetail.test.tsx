import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from 'react-dom';
import BookModel from '../../models/Book';
import BookDetail from './BookDetail';

interface Props {
    book: BookModel;
    onShowList: () => void
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
    onShowList: () => undefined
};

describe('Test Book Detail', () => {
    it('bookdetail main div is visible', () => {
        render(<BookDetail book={container.book} onShowList={container.onShowList} />);
        const divElement = document.getElementsByClassName('ui raised padded container segment')
        expect(divElement).toBeTruthy();
    });

    it('h1 with booktitle is visible', () => {
        render(<BookDetail book={container.book} onShowList={container.onShowList} />);
        const divElement: HTMLCollectionOf<HTMLHeadingElement> = document.getElementsByTagName('h1')
        expect(divElement).toEqual("<h1>Angular</h1>");
    });

})
