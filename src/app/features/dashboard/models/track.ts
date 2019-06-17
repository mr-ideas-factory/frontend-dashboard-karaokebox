import { Album } from './album';
import { Artist } from './artist';

export interface Track {
    id: number;
    title: string;
    artists: Artist[];
    genres: string[];
    album: Album;
    location: string;
    duration: string;
    image: string;
}
