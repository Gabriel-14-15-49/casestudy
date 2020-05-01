import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ReqtrainingComponent } from './reqtraining/reqtraining.component';
import {EmpdetailsComponent} from './empdetails/empdetails.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { CoursestatusComponent } from './coursestatus/coursestatus.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'PersonalComponent', component: PersonalComponent
  },
  {
    path: 'ReqtrainingComponent', component: ReqtrainingComponent
  },
  {
    path: 'CoursestatusComponent', component: CoursestatusComponent
  },
  {
    path: 'EmpdetailsComponent', component: EmpdetailsComponent
  },
  // { path: '', redirectTo: '/PersonalComponent', pathMatch: 'full'},
  // { path: '**', component: PersonalComponent },
  // { path: '**', component: PageNotFoundComponentComponent }
];

RouterModule.forRoot(
  routes,
  {
    preloadingStrategy: PreloadAllModules
  }
)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
