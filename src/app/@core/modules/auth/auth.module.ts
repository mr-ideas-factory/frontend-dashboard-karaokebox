import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {SignInComponent} from './components/sign-in/sign-in.component';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    exports: [],
    providers: []
})
export class AuthModule {
}
