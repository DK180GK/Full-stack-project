import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { StudentsWithBalanceComponent } from './components/students-with-balance/students-with-balance.component';
import { StudentsWithoutBalanceComponent } from './components/students-without-balance/students-without-balance.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';

import { StudentsService } from './services/students.service';
import { WithBalanceFilterPipe } from './pipes/with-balance-filter.pipe';
import { WithoutBalanceFilterPipe } from './pipes/without-balance-filter.pipe';
const appRoutes: Routes=[
  { path: '', redirectTo: 'HomepageComponent',pathMatch:'full' },
  {path:'',component: HomepageComponent},
  {path:'Login', component: LoginComponent},
  {path:'Dashboard', component: DashboardComponent,canActivate:[AuthGuard],
  children: [
    //{path:'',redirectTo: 'allStudents', component: DashboardComponent,pathMatch:'full'},
    {path:'', component: AllStudentsComponent,canActivate:[AuthGuard]},
    {path:'allStudents', component: AllStudentsComponent,canActivate:[AuthGuard]},
    {path:'studentsWithBalance', component: StudentsWithBalanceComponent,canActivate:[AuthGuard]},
    {path:'studentsWithoutBalance', component: StudentsWithoutBalanceComponent,canActivate:[AuthGuard]},
    {path:'addStudent', component: NewStudentComponent}
  ]
}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AllStudentsComponent,
    StudentsWithBalanceComponent,
    StudentsWithoutBalanceComponent,
    HomepageComponent,
    DashboardComponent,
    NewStudentComponent,
    WithBalanceFilterPipe,
    WithoutBalanceFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LoginService,AuthGuard,StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
