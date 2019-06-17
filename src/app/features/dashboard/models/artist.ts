import { Genres } from './genres';

export interface Artist {
    id: number;
    name: string;
    genres: Genres[];
    image: string;
}
