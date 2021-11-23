import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UsersService} from "../../core/services/http/users.service";
import {Apollo, gql} from "apollo-angular";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private route: ActivatedRoute, private userHTTP: UsersService, private apollo: Apollo) {
    }

    userId!: string
    hours !: any
    user: any
    GET_USER_HOURS = gql`
        query GetUserHours($userId: String){
            Hours(user: $userId){
                user,
                start,
                end
            }
        }
    `
    DELETE_HOUR = gql`
        mutation  DeleteHour($user: String, $start:  Date, $end: Date){
            deleteHour( user: $user, start: $start, end: $end){
                user,
                start,
                end
            }
        }
    `

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.userId = params.id
        })
        this.userHTTP.getOwnData(this.userId)
            .subscribe((userinfo) => {
                this.user = userinfo
            })
        this.apollo.query<any>({
            query: this.GET_USER_HOURS,
            variables: {
                userId: this.userId
            }
        }).subscribe((hours) => {
            this.hours = hours.data.Hours
        })
    }

    deleteHour(hour: any): void {
        this.apollo.mutate<any>({
            mutation: this.DELETE_HOUR,
            variables: {
                user: hour.user,
                start: hour.start,
                end: hour.end
            }
        }).subscribe((result) => {
            this.hours = result.data.Hours
        })
    }

}
