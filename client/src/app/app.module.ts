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
    Settings,
    LogOut
} from 'lucide-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import {CalendarModule} from "./calendar/calendar.module";
import { GraphQLModule } from './graphql.module';
import {InterceptorsInterceptor} from "./core/interceptors/interceptors.interceptor";

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
            Settings,
            LogOut
        }),
        FormsModule,
        ReactiveFormsModule,
        UserModule,
        SharedModule,
        CoreModule,
        CalendarModule,
        GraphQLModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorsInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
