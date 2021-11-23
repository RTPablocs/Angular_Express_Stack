import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class InterceptorsInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('auth');
        let authReq = request.clone({
            setHeaders: {
                authorization: `Bearer ${token}`
            }
        })
        return next.handle(authReq);
    }
}
