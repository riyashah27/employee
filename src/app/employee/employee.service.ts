import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  // Default URI to call express service is: http://localhost:4000/emp
  uri='http://localhost:4000/emp'; 

  //'http://localhost:4000/allEmp'
  getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.uri}`+'/allEmp');
  }

  //'http://localhost:4000/addEmp'
  addEmployee(id,name,designation)
  {
    let emp={
      empId:id,
      empName:name,
      designation:designation
    };
    return this.httpClient.post(`${this.uri}`+'/addEmp',emp).subscribe(res=>console.log("New Employee Added Successfully"));
  }

  //'http://localhost:4000/delete/:empId'
  deleteEmployee(empId:number):any
  {
    this.httpClient.delete(`${this.uri}`+'/delete/'+`${empId}`).subscribe(res=>console.log("New Employee Added Successfully"));
  }

  updateEmployee(empId,designation):any{

    return this.httpClient.put(`${this.uri}`+'/update/'+empId+'/'+designation,{}).subscribe(res => console.log('Done'));
  }

}

