import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthComponent} from './auth/auth.component'
import { ParentComponent } from './relationalComponets/parent/parent.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'parent', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
