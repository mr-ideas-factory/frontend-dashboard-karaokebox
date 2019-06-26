import {Injectable} from '@angular/core';
import {Login} from '../models/login';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    signIn(user: Login): void {
    }
}
