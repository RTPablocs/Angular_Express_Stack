import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from './base/base.component';
import {DayComponent} from './day/day.component';
import {CalendarRoutingModule} from "./calendar-routing.module";
import {RegisterHoursComponent} from './register-hours/register-hours.component';
import {UserModule} from "../user/user.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HourSelectorComponent} from './hour-selector/hour-selector.component';
import {LucideAngularModule} from "lucide-angular";
import {ArrowLeft, ArrowRight, Flag, Check, AlertTriangle} from "lucide-angular";


@NgModule({
    declarations: [
        BaseComponent,
        DayComponent,
        RegisterHoursComponent,
        HourSelectorComponent
    ],
    imports: [
        CommonModule,
        CalendarRoutingModule,
        UserModule,
        FormsModule,
        ReactiveFormsModule,
        LucideAngularModule.pick({
            ArrowLeft,
            ArrowRight,
            Flag,
            Check,
            AlertTriangle

        })
    ]
})
export class CalendarModule {
}
