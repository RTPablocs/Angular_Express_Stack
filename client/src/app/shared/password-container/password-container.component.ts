import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-password-container',
    templateUrl: './password-container.component.html',
    styleUrls: ['./password-container.component.css']
})
export class PasswordContainerComponent implements OnInit {

    constructor() { }

    @Input('password') password !: string
    isVisible = false
    inputType = 'password'

    ngOnInit(): void {
    }

    toggleView(): void {
        this.isVisible = !this.isVisible
        this.inputType = this.isVisible? 'text' : 'password'
    }

}
