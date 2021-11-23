import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../core/services/login.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    constructor(private auth: LoginService) {
    }

    loginData = new FormGroup({
        mail: new FormControl(null),
        password: new FormControl(null)
    })
    ngOnInit(): void {
    }

    executeLogin(): void {
        const email = this.loginData.value.mail
        const passwd = this.loginData.value.password
        this.auth.getLogin(email, passwd)
        this.loginData.reset()
    }
}
