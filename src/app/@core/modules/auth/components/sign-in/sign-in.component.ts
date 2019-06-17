import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    user: Login;

    constructor(
        private router: Router,
        private service: AuthService
    ) {
    }

    ngOnInit() {
    }

    auth(): void {
        this.service.signIn(this.user);
        this.router.navigate(['/dashboard']);
    }

}
