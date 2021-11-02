import {Component, OnDestroy, OnInit} from '@angular/core';
import {loggedUser} from '../../core/models/users';
import {UsersService} from '../../core/services/http/users.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

    constructor(private UserHttp: UsersService) {
    }

    userList !: loggedUser[]

    ngOnInit(): void {
        this.UserHttp.getAllUsers()
            .subscribe((data) => {
                this.userList = data.users
            })
    }

    ngOnDestroy() {
    }

    deleteUser(id: string) {
        this.UserHttp.deleteUser(id)
            .subscribe(data => this.userList = data)
    }

    createUser(user: loggedUser) {
        this.UserHttp.createUser(user)
            .subscribe(data => {
                this.userList = data.resultAfterOperation
            })
    }

    updateUser(id: string, updateFields: object) {
        console.log(updateFields)
        this.UserHttp.updateUser(id, updateFields).subscribe((data) => {
                this.userList = data.resultAfterOperation
            }
        )
    }
}
