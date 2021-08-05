import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeApplicationModel } from "src/app/common/model/employeeApplication.model";
import { HomeService } from "src/app/common/service/home.service";
@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.scss']
})
export class CreateApplicationComponent implements OnInit {
  employeeApplication: EmployeeApplicationModel = new EmployeeApplicationModel(); 
  employeeLeave: EmployeeApplicationModel[];
  constructor(private service: HomeService,
    public dialogRef: MatDialogRef<CreateApplicationComponent>,
    ) { }

  ngOnInit(): void {
    this.getListEmployeeApplication();
  }
  private getListEmployeeApplication(){
    this.service.getListEmployeeApplication().subscribe(data => {
      this.employeeLeave = data;
    });
  }
  saveLeave(){
    this.service.createEmployeeApplication(this.employeeApplication).subscribe( data =>{
      console.log(data);
      this.getListEmployeeApplication();
    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.employeeApplication);
    this.saveLeave();
    this.dialogRef.close();
  }
}
