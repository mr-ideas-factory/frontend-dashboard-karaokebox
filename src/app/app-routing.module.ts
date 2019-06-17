import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './@core/modules/app-common/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./@core/modules/auth/auth.module').then(mod => mod.AuthModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(mod => mod.DashboardModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
