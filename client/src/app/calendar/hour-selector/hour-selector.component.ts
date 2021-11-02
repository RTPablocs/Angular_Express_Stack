import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-hour-selector',
    templateUrl: './hour-selector.component.html',
    styleUrls: ['./hour-selector.component.css']
})
export class HourSelectorComponent implements OnInit {

    @Input() day: Date = new Date()
    @Output() computedHours = new EventEmitter<any>()
    hours = 0
    hourData = new FormGroup({
        startHour: new FormControl(null),
        endHour: new FormControl(null)
    })

    startDate = new Date(this.day.getFullYear(), this.day.getMonth(), this.day.getDate())
    endDate = new Date(this.day.getFullYear(), this.day.getMonth(), this.day.getDate())

    constructor() {
    }

    ngOnInit(): void {
    }

    setHours(hourString: string, field: Date): void {
        const hour = hourString.split(':')
        field.setHours(Number(hour[0]), Number(hour[1]))
        this.calculateHourInterval()
    }

    calculateHourInterval(): void {
        const [startHour, endHour] = [this.hourData.value.startHour, this.hourData.value.endHour]
        if (startHour && endHour) {
            // @ts-ignore
            this.hours = Math.floor(((this.endDate - this.startDate) / (60 * 60 * 1000)) * 100) / 100
        }
    }

    emitHoursToParent(): void {
        const hoursToEmit = {'start': this.startDate, 'end': this.endDate}
        this.computedHours.emit(hoursToEmit)
    }
}
