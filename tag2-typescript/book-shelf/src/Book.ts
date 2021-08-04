export default class Book {
    constructor(
        public title: string,
        public pageCount: number,
        public pageCurrent: number,
        public isBorrowed: boolean,
        public genre: string,
        public language: string
    ) { }

    progress(): number {
        return Math.round(100 * this.pageCurrent / this.pageCount)
    }

    toString(): string {
        return `${this.title} wurde zu ${this.progress()}% gelesen`
    }
}