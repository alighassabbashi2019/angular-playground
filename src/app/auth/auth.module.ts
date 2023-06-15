import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AghDirectiveModule } from '../agh-directive/agh-directive.module';
import { FormsModule } from '@angular/forms';
import { ToJalaliPipe } from 'src/lib/to-jalali.pipe';
import { SignupMessageComponent } from './signup-message/signup-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridHelperModule } from 'shared/frontend/data-access/ag-grid-helper/ag-grid-helper.module';

@NgModule({
  declarations: [
    AuthComponent,
    ToJalaliPipe,
    SignupMessageComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    AghDirectiveModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    AgGridHelperModule
  ],
})
export class AuthModule {}
