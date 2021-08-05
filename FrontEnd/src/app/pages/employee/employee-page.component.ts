import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from "../../common/model/employee.model";
import { EmployeeService } from 'src/app/common/service';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
@Component({
    selector: 'app-employee-page',
    templateUrl: './employee-page.component.html',
    styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
    listEmployee = new Array<Employee>();
    employees: Employee[];
    fileName= 'ListEmployee.xlsx';
    constructor(
        private dialog: MatDialog,
        private sevice: EmployeeService,
        private router: Router,
    ) { }

    ngOnInit() {
       this.getEmployees()
    }
    private getEmployees(){
        this.sevice.getEmployeesList().subscribe(data => {
          this.employees = data;
          // console.log(this.employees)
        });
      }

      
  exportexcel(): void 
  {
     /* table id is passed over here */   
     let element = document.getElementById('excel-table'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);
  }
  deleteEmployee(id: number){
    Swal.fire({
      title: 'Thông báo',
      text: "Bạn chắc chắn muốn xóa nhân viên này?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý',
      cancelButtonText: 'Hủy bỏ',
  }).then((result) => {
      if (result.isConfirmed) {
        this.sevice.deleteEmployee(id).subscribe( data => {
          console.log(data);
          this.getEmployees();
        })
      }
  })
  }


    openDialog() {
        this.dialog
            .open(CreateEmployeeComponent, {
                panelClass: 'dialog-create-employee',
            })
            .afterClosed()
            .subscribe((result) => {
                this.ngOnInit();
            });
}
employeeDetails(id: number){
  this.router.navigate(['employee-details', id]);
}
}
