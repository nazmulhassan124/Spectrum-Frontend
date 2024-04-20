import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';


const routes: Routes = [ {
  path: '',
  redirectTo:'home',
  pathMatch: 'full'
},{
  path: 'home',
  component:HomeComponent
},
{path:'registration',
component:RegistrationComponent}
]

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
