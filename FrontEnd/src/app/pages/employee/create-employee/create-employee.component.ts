import { Component, OnInit } from '@angular/core';
import { Employee } from "src/app/common/model/employee.model";
import { EmployeeService } from "src/app/common/service/employee.service";
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();  
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.getEmployees();
    },
    error => console.log(error));
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    this.dialogRef.close();
  }
}
