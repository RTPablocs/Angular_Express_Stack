import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {formDataEmitter} from 'src/app/core/models/form';


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    constructor() {
    }

    @Output() dataToSubmit = new EventEmitter<formDataEmitter>()
    @Input('isEditable') isEditable !: boolean

    dataSubmitScheme: formDataEmitter = {
        isOpen: false
    }

    userData = new FormGroup({
        name: new FormControl(null),
        surname: new FormControl(null),
        username: new FormControl(null),
        department: new FormControl(null),
        mail: new FormControl(null),
        password: new FormControl(this.generateBasicPassword())
    })

    ngOnInit(): void {

    }

    eventSubmitData() {
        if (this.isEditable) {
            this.editModeRequired()
            this.dataSubmitScheme.userData = this.userData.value
            this.dataToSubmit.emit(this.dataSubmitScheme)
            this.resetEverything()
        } else {
            this.dataSubmitScheme.userData = this.userData.value
            this.dataToSubmit.emit(this.dataSubmitScheme)
            this.resetEverything()
        }


    }

    emitCloseBox(): void {
        this.dataSubmitScheme.isOpen = false
        delete this.dataSubmitScheme.userData
        this.dataToSubmit.emit(this.dataSubmitScheme)
    }

    generateBasicPassword(): string {
        return Math.random().toString(36).slice(-8)
    }

    editModeRequired(): void {
        this.userData.value.password = null
        this.clearNullValues()
    }

    clearNullValues(): void {
        Object.keys(this.userData.value).forEach((key) => {
            if (this.userData.value[key] == null) delete this.userData.value[key]
        })
    }

    resetEverything(): void {
        this.dataSubmitScheme.isOpen = false
        this.userData.reset()
    }

}
