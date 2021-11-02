import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './shared/clock/clock.component';

const routes: Routes = [
    {path: '', component: ClockComponent},
    {path:'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path:'calendar', loadChildren:() => import('./calendar/calendar.module').then(m => m.CalendarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
