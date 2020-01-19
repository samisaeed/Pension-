import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private readonly _baseUrl;


    constructor(private _http: HttpClient,
                private _router: Router) {
        this._baseUrl = environment.logInUrl;
    }

    signIn(username: string, password: string): Observable<any> {
        return this._http.post<any>(`${this._baseUrl}login/`, {username, password});
    }

    setAuthInfoInLocalStorage(accessToken, payload): void {
        console.log('payload' , payload);
        localStorage.clear();
        localStorage.setItem('auth', JSON.stringify({
            access_Token: accessToken,
            username: payload.username,
            userId: payload.user_id,
            loggedIn: true
        }));
    }

    get authInfo(): any {
        return JSON.parse(localStorage.getItem('auth'));
    }

    get loggedInStatus(): boolean {
        return this.authInfo && this.authInfo.loggedIn ? this.authInfo.loggedIn : false;
    }
}
