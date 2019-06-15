import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CoreService {
    private tokenKey: string = environment.tokenKey;

    constructor() {
    }

    getToken(): string {
        return localStorage.getItem(this.tokenKey);
    }

    setToken(refreshedToken: string): void {
        localStorage.removeItem(this.tokenKey);
        localStorage.setItem(this.tokenKey, refreshedToken);
    }
}
