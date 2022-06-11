import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';

import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewComponent } from './view/view.component';
import { Role } from './_models/role';
import { AuthGuard } from './__helpers/auth.guard';

const routes: Routes = [
  { path:'',component:HomeComponent,canActivate:[AuthGuard]},
  { path:'login', component:UserloginComponent },
  { path:'admin', component:AdminComponent,canActivate:[AuthGuard],data:{roles:[Role.Admin]}},
  {path:'users/:id/view',component:ViewComponent},
  {path:'users/:id/edit',component:EditComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
