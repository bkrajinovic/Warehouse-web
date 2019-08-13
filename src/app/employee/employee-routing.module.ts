import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/new', component: EmployeeFormComponent },
  { path: 'employees/:id', component: EmployeeFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
