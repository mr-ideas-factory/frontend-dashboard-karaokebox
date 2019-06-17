import { Base } from 'src/app/@core/models/base';
import { SongOrders } from './song-orders';

export interface ListSongOrders extends Base {
    data: SongOrders[];
}
