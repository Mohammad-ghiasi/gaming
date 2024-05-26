export interface platform{
    id: number;
    name: string;
    slug: string;
}
export interface game{
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: {platform: platform}[];
    ratings_count: number;
    genres: {
        id: number;
        name: string;
    }[];
    released: string
}