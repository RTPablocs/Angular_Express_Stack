import {Component, OnInit} from '@angular/core';
import {LoginService} from "./core/services/login.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'AngularHoursFrontend';
    isLogged: boolean = false

    constructor(private auth: LoginService) {
        this.auth.loggedObservable.subscribe((value) => {
            this.isLogged = value
        })

    }

    ngOnInit() {
        this.auth.loggedIn.next(localStorage.getItem('auth') !== null)
    }
}
