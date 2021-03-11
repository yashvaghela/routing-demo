import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentdDetailComponent } from './departmentd-detail/departmentd-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{path:'',redirectTo:'/departments',pathMatch:'full'},
{path:'departments',component:DepartmentListComponent},
{path:'departments/:id',
component: DepartmentdDetailComponent,
children: [
  { path : 'Overview' ,component: DepartmentOverviewComponent},
  { path : 'Contact'   ,component:   DepartmentContactComponent}


]



},
{path:'employees',component:EmployeeListComponent },
{path:'**',component:PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
                                  DepartmentListComponent,
                                  EmployeeListComponent,
                                  PageNotFoundComponent,
                                  DepartmentdDetailComponent,
                                  DepartmentOverviewComponent,
                                  DepartmentContactComponent
                                ];
