import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/@core/guards/role.guard';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [
            RoleGuard
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {
}
