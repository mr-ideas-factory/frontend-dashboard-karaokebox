import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoleGuard} from 'src/app/@core/guards/role.guard';
import {SignInComponent} from './components/sign-in/sign-in.component';

const routes: Routes = [
    {
        path: '',
        component: SignInComponent,
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
export class AuthRoutingModule {
}
