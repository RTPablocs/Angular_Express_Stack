import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserButtonsComponent } from './user-buttons/user-buttons.component';
import { LucideAngularModule } from 'lucide-angular';
import { X, Edit } from 'lucide-angular';
import { UserFormComponent } from './user-form/user-form.component';
import { ClockComponent } from './clock/clock.component';
import { PasswordContainerComponent } from './password-container/password-container.component';


@NgModule({
  declarations: [
    UserButtonsComponent,
    UserFormComponent,
    ClockComponent,
    PasswordContainerComponent
  ],
  exports: [
      UserButtonsComponent,
      UserFormComponent,
      PasswordContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
        X,
        Edit
    })
  ]
})
export class SharedModule { }
