import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalaryService } from 'src/app/common/service';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { SalaryModel } from "src/app/common/model/salary.model";
@Component({
    selector: 'app-salary-page',
    templateUrl: './salary-page.component.html',
    styleUrls: ['./salary-page.component.scss'],
})
export class SalaryPageComponent implements OnInit {
    salary: SalaryModel[];
    fileName= 'ListSalary.xlsx';
    constructor(
        public dialog: MatDialog,
        private salaryService: SalaryService
    ) { }

    ngOnInit() {
       this.getSalaryList()
    }
    private getSalaryList(){
        this.salaryService.getSalaryList().subscribe(data => {
          this.salary = data;
        });
      }
    

    
      deleteSalary(id: number){
        Swal.fire({
          title: 'Thông báo',
          text: "Bạn chắc chắn muốn xóa lương của nhân viên này?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Đồng ý',
          cancelButtonText: 'Hủy bỏ',
      }).then((result) => {
          if (result.isConfirmed) {
            this.salaryService.deleteSalaryEmployee(id).subscribe( data => {
              console.log(data);
              this.getSalaryList();
            })
          }
      })
      }
    openDialogAdd() {
        this.dialog
            .open(AddSalaryComponent, {
                panelClass: 'dialog-add-salary',
                data: {}
                // disableClose: true,
            })
            .afterClosed()
            .subscribe((result) => {
                this.ngOnInit();
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

}
