import Book from "./Book";

export default class BookShelf {
    constructor(private books: Book[]) { }

    toString(): string {
        let read = 0
        let notRead = 0
        let pages = 0
        let watchedPages = 0
        let allPages = 0
        let languages = []
        let borrowed = 0
        this.books.forEach(book => {
            if (languages.indexOf(book.language) == -1) {
                languages.push(book.language)
            }
            allPages += book.pageCount
            if (book.isBorrowed) {
                borrowed += 1
            }
            if (book.pageCurrent > 0) {
                read += 1
                pages += book.pageCount
                watchedPages += book.pageCurrent

            } else {
                notRead += 1
            }
        });

        this.books.map(book => {
            if (languages.indexOf(book.language) == -1) {
                languages.push(book.language)
            }
            allPages += book.pageCount
            if (book.isBorrowed) {
                borrowed += 1
            }
            if (book.pageCurrent > 0) {
                read += 1
                pages += book.pageCount
                watchedPages += book.pageCurrent

            } else {
                notRead += 1
            }
        });

        return ['',
            '*** Bookshelf ***',
            '',
            `    - Gesamt Lesefortschritt: ${Math.round(100 * watchedPages / allPages)}%.`,
            `    - ${(read < 2) ? read + ' Buch' : read + ' Bücher'} (${Math.round(100 * watchedPages / pages)}%).`,
            `    - Es gibt ${this.books.length}${(this.books.length > 1 ? ' Bücher' : ' Buch')} in ${languages.length}${(languages.length > 1 ? ' Sprachen' : ' Sprache')}`,
            `    - Es ${(borrowed > 1) ? 'wurden ' + borrowed + ' Bücher' : 'wurde ' + borrowed + ' Buch'} ausgeliehen`,
            '',
            '*** Bookshelf ***',
            ''
        ].join("\n")

    }
}