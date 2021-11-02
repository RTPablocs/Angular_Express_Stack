import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { formDataEmitter } from 'src/app/core/models/form';

@Component({
    selector: 'app-user-creator',
    templateUrl: './user-creator.component.html',
    styleUrls: ['./user-creator.component.css'],
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '7vw',
                width: '18vw',
                backgroundColor: '#f26849',
                color: 'white'

            })),
            state('close', style({
                height: '2.5vw',
                width: '2.5vw',
                backgroundColor: '#d9d9d9',
                color: 'black',
            })),
            transition('open <=> close', [
                animate('0.3s')
            ])
        ])
    ]
})
export class UserCreatorComponent implements OnInit {

    constructor() { }

    @Output('userCreated') user = new EventEmitter<any>()
    isOpen = false

    ngOnInit(): void {
    }



    toggle() {
        this.isOpen = !this.isOpen
    }

    setProperties($event: formDataEmitter): void {
        this.toggle()
        if ($event.hasOwnProperty('userData')){
            this.user.emit($event.userData)
        }
    }
}
