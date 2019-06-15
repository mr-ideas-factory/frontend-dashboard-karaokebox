import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoreService} from '../services/core.service';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class RequestInterceptor implements HttpInterceptor {
    private tokenKey: string = environment.tokenKey;

    constructor(private service: CoreService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.service.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        return next.handle(request).pipe(tap(event => {
            if (event instanceof HttpResponse) {
                if (event.body && event.status !== 401) {
                    const refreshedToken: string = event.headers.get(this.tokenKey);
                    this.service.setToken(refreshedToken);
                }
            }
        }));
    }
}
