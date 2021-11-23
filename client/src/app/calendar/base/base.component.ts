import {Component, OnInit} from '@angular/core';
import {HoursService} from "../../core/services/http/hours.service";
import {Apollo, gql} from "apollo-angular";


@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

    constructor(private hours: HoursService, private apollo: Apollo) {
    }

    INSERT_HOUR = gql`
        mutation  RegisterHour($user: String, $start:  Date, $end: Date){
            registerHour( user: $user, start: $start, end: $end)
        }
    `

    ngOnInit(): void {
    }

    sendDataToServer(data: any): void {
        this.apollo.mutate<any>({
            mutation: this.INSERT_HOUR,
            variables: {
                user: data.user,
                start: data.start,
                end: data.end
            }
        }).subscribe()
    }


}

