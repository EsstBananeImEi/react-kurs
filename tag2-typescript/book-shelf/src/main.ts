import BookShelf from './BookShelf'
import Book from './Book'

const angular = new Book('Angular', 406, 32, true, 'Sachbuch', 'Deutsch')
const react = new Book('React', 203, 64, false, 'Sachbuch', 'Deutsch')
const vue = new Book('Vue', 101, 11, true, 'Sachbuch', 'Englisch')
const backbone = new Book('Backbone', 302, 0, true, 'Sachbuch', 'Englisch')
const potter = new Book('Harry Potter und der Schleim der Weisen', 339, 0, false, 'Roman', 'Deutsch')
const yatsuba = new Book('やつば', 224, 8, false, 'Manga', 'Japanisch')
const genki = new Book('Genki/元気', 385, 40, true, 'Sachbuch', 'Englisch/Japanisch')
const db = new Book('Dragonball', 274, 0, false, 'Manga', 'Japanisch')

console.log(react.toString())

const books = [angular, react, vue, backbone, potter, yatsuba, genki, db]
console.table(books)

const bookShelf = new BookShelf(books)
console.log(bookShelf.toString())