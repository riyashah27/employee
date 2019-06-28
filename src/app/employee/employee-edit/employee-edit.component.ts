import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit
{
  @Input()
  employee:Employee;
  constructor(private service:EmployeeService,private route:ActivatedRoute,private router:Router) {}


  ngOnInit() {}
  updateEmployee(empId:any,designation:any){
    this.service.updateEmployee(empId,designation);
  }
}