import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListSongOrders } from '../../models/list-song-orders';
import { SongOrders } from '../../models/song-orders';
import { DashboardListSongsService } from '../../services/dashboard-list-songs.service';

@Component({
    selector: 'app-dashboard-list-songs',
    templateUrl: './dashboard-list-songs.component.html',
    styleUrls: ['./dashboard-list-songs.component.scss']
})
export class DashboardListSongsComponent implements OnInit, OnDestroy {

    listSongsOrder: SongOrders[];

    private subscription: Subscription = new Subscription();

    constructor(
        private service: DashboardListSongsService
    ) { }

    ngOnInit() {
        this.getListCurrentSongsOrder();
    }

    getListCurrentSongsOrder(): void {
        const sub = this.service.getListCurrentSongsPlaying().subscribe((result: ListSongOrders) => {
            this.listSongsOrder = result.data;
        });
        this.subscription.add(sub);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
