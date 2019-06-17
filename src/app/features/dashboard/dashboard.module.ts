import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/@core/modules/app-common/app-common.module';
import { MaterialModule } from 'src/app/@core/modules/material/material.module';
import { ArraySortPipe } from 'src/app/@core/pipes/array-sort.pipe';
import { DashboardListPeopleComponent } from './components/dashboard-list-people/dashboard-list-people.component';
import { DashboardListSongsComponent } from './components/dashboard-list-songs/dashboard-list-songs.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [
        LayoutComponent,
        DashboardListSongsComponent,
        DashboardListPeopleComponent,
        ArraySortPipe
    ],
    imports: [
        CommonModule,
        AppCommonModule,
        DashboardRoutingModule,
        MaterialModule
    ]
})
export class DashboardModule {
}
