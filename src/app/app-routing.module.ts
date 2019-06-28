import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeGetComponent } from './employee/employee-get/employee-get.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';

const routes: Routes = [
  {path:'emp/create',component:EmployeeAddComponent},
  {path:'emp/allEmp',component:EmployeeGetComponent},
  {path:'emp/delete/:empId',component:EmployeeDeleteComponent},
  {path:'emp/edit/:empId',component:EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
