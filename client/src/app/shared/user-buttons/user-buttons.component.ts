import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'app-user-buttons',
    templateUrl: './user-buttons.component.html',
    styleUrls: ['./user-buttons.component.css']
})
export class UserButtonsComponent implements OnInit {

    constructor() {
    }

    @Input() needsEditMode !: boolean
    @Output() hasUpdatedAnything = new EventEmitter<any>()
    @Output() isGoingToDelete = new EventEmitter<any>()
    @Output() isGoingToEdit = new EventEmitter<any>()


    ngOnInit(): void {
    }

    notifyUpdateChanges(): void {
        this.emitDataToParent(this.hasUpdatedAnything, true)

    }

    setEditMode(): void {
        this.emitDataToParent(this.isGoingToEdit, true)
    }

    setDeleteMode(): void {
        this.emitDataToParent(this.isGoingToDelete, true)
    }

    emitDataToParent(outputPlace: EventEmitter<boolean>, value: boolean): void {
        outputPlace.emit(value)

    }

}
