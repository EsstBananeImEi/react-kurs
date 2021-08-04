export type Genre = 'Sachbuch' | 'Märchen' | 'Manga' | 'Roman'

export interface BookModel {
    title: string;
    pageCount: number;
    pageCurrent: number;
    isBorrowed: boolean;
    genre: Genre;
    language: LanguageModel;
}

export interface LanguageModel {
    mainLanguage: string;
    subLanguange: string | null;
}

export interface BookListModel {
    books: BookModel[];
}