import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AghDirectiveModule } from '../agh-directive/agh-directive.module';
import { FormsModule } from '@angular/forms';
import { ToJalaliPipe } from 'src/lib/to-jalali.pipe';
import { SignupMessageComponent } from './signup-message/signup-message.component';


@NgModule({
  declarations: [
    AuthComponent,
    ToJalaliPipe,
    SignupMessageComponent
  ],
  imports: [
    CommonModule,
    AghDirectiveModule,
    FormsModule
  ],
})
export class AuthModule {
}