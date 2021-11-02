import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {

    today = new Date()
    @Output() dataToParent = new EventEmitter<any>()


    constructor() {
    }


    ngOnInit(): void {

    }

    resetDate(): void{
        this.today = new Date()
}
    changeDate(arg: number): void {
        this.today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + arg)
    }
    elevateToParent(arg: any):void {
        this.dataToParent.emit(arg)
    }
}
