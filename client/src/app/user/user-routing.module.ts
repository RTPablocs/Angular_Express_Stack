import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
    {path: 'list', component: UserListComponent},
    {path: ':id', component:ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
