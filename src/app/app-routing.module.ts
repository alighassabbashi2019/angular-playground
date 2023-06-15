import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthComponent} from './auth/auth.component'
import { ParentComponent } from './relationalComponets/parent/parent.component';
import { UsersListComponent } from './auth/users-list/users-list.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'users', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
