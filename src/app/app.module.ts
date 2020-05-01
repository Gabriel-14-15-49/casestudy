import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalComponent } from './personal/personal.component';
import { ReqtrainingComponent } from './reqtraining/reqtraining.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';
import { CoursestatusComponent } from './coursestatus/coursestatus.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component'; 
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';
import { CommonModule }   from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonalComponent,
    ReqtrainingComponent,
    PageNotFoundComponentComponent,
    CoursestatusComponent,
    EmpdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    jqxBarGaugeModule,
    jqxFileUploadModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
