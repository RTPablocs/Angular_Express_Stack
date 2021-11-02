import {Component, OnInit} from '@angular/core';
import {HoursService} from "../../core/services/http/hours.service";

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

    constructor(private hours: HoursService) {
    }

    ngOnInit(): void {
    }

    sendDataToServer(data: any): void {
        console.log(data)
        this.hours.registerHour(data)
            .subscribe()
    }


}

