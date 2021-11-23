import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private router: Router) {
    }

    loggedIn = new BehaviorSubject(false);
    loggedObservable = this.loggedIn.asObservable();

    getLogin(mail: string, password: string): void {
        const body = {
            mail,
            password
        };
        console.log(body)
        this.http.post('http://localhost:3000/auth/login', body)
            .subscribe((resp: any) => {
                this.loggedIn.next(true);
                if (resp.token != undefined) {
                    localStorage.setItem('auth', resp.token);
                    this.router.navigate(['/'])
                }
            });
    }

    getLogout(): void {
        localStorage.removeItem('auth');
        this.router.navigate(['/login']);
    }

    isLogged(): boolean {
        return localStorage.getItem('auth') !== null;
    }


}
