import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClockComponent} from './shared/clock/clock.component';
import {AuthGuard} from "./core/guards/auth.guard";
import {LoginFormComponent} from "./user/login-form/login-form.component";

const routes: Routes = [
    {path: 'login', component: LoginFormComponent},
    {path: '', component: ClockComponent, canActivate: [AuthGuard]},
    {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard]},
    {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule),
        canActivate: [AuthGuard]
    },
    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
