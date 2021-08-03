export default class Book {
    constructor(
        private title: string,
        public pageCount: number,
        public pageCurrent: number,
        public isBorrowed: boolean,
        private genre: string,
        public language: string
    ) { }

    progress(): number {
        return Math.round(100 * this.pageCurrent / this.pageCount)
    }

    toString(): string {
        return `${this.title} wurde zu ${this.progress()}% gelesen`
    }
}