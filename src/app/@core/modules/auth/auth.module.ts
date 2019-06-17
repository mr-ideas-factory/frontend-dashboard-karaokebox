import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: []
})
export class AuthModule {
}
