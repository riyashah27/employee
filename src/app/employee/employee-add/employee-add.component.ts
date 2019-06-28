import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  angForm:FormGroup

  constructor(private fb:FormBuilder, private service:EmployeeService) 
  { 
    this.createForm();
  }

  ngOnInit() {}

  createForm()
  {
    this.angForm=this.fb.group({
      empId:['',Validators.required],
      empName:['',Validators.required],
      designation:['',Validators.required]
    });
  }

  addEmployee(empId,empName,designation)
  {
    this.service.addEmployee(empId,empName,designation);
  }

}
