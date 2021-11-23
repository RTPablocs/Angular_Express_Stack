import {Component, OnInit} from '@angular/core';
import {LogIn} from "lucide-angular";
import {LoginService} from "../../services/login.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    constructor(private auth: LoginService) {
    }

    isLogged: boolean = false

    ngOnInit(): void {
        this.auth.loggedObservable.subscribe((value) => {
            this.isLogged = value
        })
    }

    executeLogout(): void {
        this.auth.loggedIn.next(false);
        this.auth.getLogout();
    }

}
