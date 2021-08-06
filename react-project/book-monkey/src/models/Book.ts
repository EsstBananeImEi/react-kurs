export default interface BookModel {
    isbn: string;
    title: string;
    authors: string[];
    published: Date;
    subtitle?: string;
    rating?: number;
    thumbnails: ThumbnailModel[];
    description?: string;
}

export interface ThumbnailModel {
    url: string;
    title?: string;
}
