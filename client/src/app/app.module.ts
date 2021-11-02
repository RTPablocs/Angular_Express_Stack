import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { LucideAngularModule } from 'lucide-angular';
import {
    Clock,
    BarChart2,
    User,
    Calendar,
    Settings
} from 'lucide-angular';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {CalendarModule} from "./calendar/calendar.module";

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LucideAngularModule.pick({
            Clock,
            BarChart2,
            User,
            Calendar,
            Settings
        }),
        FormsModule,
        ReactiveFormsModule,
        UserModule,
        SharedModule,
        CoreModule,
        CalendarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
