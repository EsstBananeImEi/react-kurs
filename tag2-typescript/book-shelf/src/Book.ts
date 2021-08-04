import { Genre } from "./services/myTypes"

export default class Book {
    constructor(
        public title: string,
        public pageCount: number,
        public pageCurrent: number,
        public isBorrowed: boolean,
        public genre: Genre,
        public language: string
    ) { }

    unreadPages(): number {
        return this.pageCount - this.pageCurrent
    }

    private progress(): number {
        return Math.round(100 * this.pageCurrent / this.pageCount)
    }

    toString(): string {
        return `${this.title} wurde zu ${this.progress()}% gelesen`
    }
}