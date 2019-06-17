import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListSongOrders } from '../models/list-song-orders';

@Injectable({
    providedIn: 'root'
})
export class DashboardListSongsService {

    private api: string;

    constructor(private httpClient: HttpClient) {
        this.api = environment.api;
    }

    getListCurrentSongsPlaying(): Observable<ListSongOrders> {
        return this.httpClient.get<ListSongOrders>(this.api + '/dashboard/list-songs-current-order');
    }
}
