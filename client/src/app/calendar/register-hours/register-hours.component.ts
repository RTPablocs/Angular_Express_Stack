import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../../core/services/http/users.service";
import {loggedUser} from "../../core/models/users";

@Component({
    selector: 'app-register-hours',
    templateUrl: './register-hours.component.html',
    styleUrls: ['./register-hours.component.css']
})
export class RegisterHoursComponent implements OnInit {

    @Input() day !: Date
    @Output() readyToSendHourRegister = new EventEmitter<any>()

    constructor(private users: UsersService) {
    }

    userList !: loggedUser[]
    current_user !: loggedUser


    ngOnInit(): void {
        this.users.getAllUsers()
            .subscribe((data) => {
                this.userList = data.users
            })
    }
    emitFullHoursToParent(arg: any): void {
        arg.user = this.current_user.id
        this.readyToSendHourRegister.emit(arg)
    }


}
