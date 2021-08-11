interface BookModelWithoutDate {
    isbn: string;
    title: string;
    authors: string[];
    subtitle?: string;
    rating?: number;
    thumbnails?: ThumbnailModel[];
    description?: string;
}

interface ThumbnailModel {
    url: string;
    title?: string;
}

export default interface BookModel extends BookModelWithoutDate {
    published: Date;
}

interface ResponseBookModel extends BookModelWithoutDate {
    published: string;
}
