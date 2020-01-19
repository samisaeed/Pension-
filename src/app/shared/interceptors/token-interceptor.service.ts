import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../../main/authentication/services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

    constructor(private _authService: AuthService) {}

    intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenizedRequest = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this._authService.authInfo ? this._authService.authInfo.access_Token : null}`
            }
        });

        return next.handle(tokenizedRequest);   }
}
