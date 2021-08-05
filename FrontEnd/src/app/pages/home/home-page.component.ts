import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/common/service';
import { MatDialog } from '@angular/material/dialog';
import { CreateApplicationComponent } from "../home/create-application/create-application.component";
import { EmployeeApplicationModel } from "src/app/common/model/employeeApplication.model";
import {formatDate} from '@angular/common';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    employeeLeave: EmployeeApplicationModel[];
    currentDate = new Date();
    constructor(
        private service: HomeService,
        private dialog: MatDialog,
    ) { }

 

    ngOnInit() {
        formatDate(new Date(), 'yyyy/MM/dd', 'en');
      this.getListEmployeeApplication();
    }
    
    private getListEmployeeApplication(){
        this.service.getListEmployeeApplication().subscribe(data => {
          this.employeeLeave = data;
          console.log(this.employeeLeave)
        });
      }

    openDialog() {
        this.dialog
            .open(CreateApplicationComponent, {
                panelClass: 'dialog-add-salary',
            })
            .afterClosed()
            .subscribe((result) => {
                this.ngOnInit();
            });
}

}
