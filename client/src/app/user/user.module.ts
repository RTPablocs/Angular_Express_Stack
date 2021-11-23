import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardsComponent } from '../shared/user-cards/user-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import {
    Edit,
    X,
    Check,
    Trash2,
    Star,
    Plus
} from 'lucide-angular';
import { UserFiltersComponent } from './user-filters/user-filters.component';
import { UserCreatorComponent } from './user-creator/user-creator.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
    declarations: [
        UserListComponent,
        UserCardsComponent,
        UserFiltersComponent,
        UserCreatorComponent,
        ProfileComponent,
        LoginFormComponent,
    ],
    exports: [
        UserCardsComponent,
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        LucideAngularModule.pick({
            Edit,
            Check,
            X,
            Trash2,
            Star,
            Plus
        }),
        ReactiveFormsModule,
        SharedModule,
        CoreModule
    ]
})
export class UserModule { }
