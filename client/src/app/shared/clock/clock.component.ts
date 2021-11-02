import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs'
import { map, share } from 'rxjs/operators';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    constructor() { }

    time = new Date()
    timeSubscription!: Subscription

    ngOnInit(): void {
        this.timeSubscription = timer(0, 1000)
            .pipe(
                map(() => new Date()),
                share()
            ).subscribe(
                (time) => this.time = time
            )

    }

    ngOnDestroy(): void {
        this.timeSubscription.unsubscribe()
    }

}
