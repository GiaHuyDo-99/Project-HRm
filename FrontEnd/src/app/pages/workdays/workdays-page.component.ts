import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkdaysModel } from "src/app/common/model/workday.model";
import { WorkdayService } from 'src/app/common/service';
import { CreateWorkdaysComponent } from './create-workday/create-workdays.component';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-workdays-page',
    templateUrl: './workdays-page.component.html',
    styleUrls: ['./workdays-page.component.scss'],
})
export class WorkdaysPageComponent implements OnInit {
    fileName= 'ListWorkday.xlsx';
    workdays: WorkdaysModel[]
    constructor(
        private dialog: MatDialog,
        private service: WorkdayService,

    ) { }



    ngOnInit() {
        this.getListWorkday()
    }
    getListWorkday(){
        this.service.getWordayList().subscribe(data => {
          this.workdays = data;
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
    deleteWorkday(id: number){
        Swal.fire({
          title: 'Thông báo',
          text: "Bạn chắc chắn muốn xóa công  này?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Đồng ý',
          cancelButtonText: 'Hủy bỏ',
      }).then((result) => {
          if (result.isConfirmed) {
            this.service.deleteWorkday(id).subscribe( data => {
              console.log(data);
              this.getListWorkday();
            })
          }
      })
      }
    openDialog() {
        this.dialog
            .open(CreateWorkdaysComponent, {
                height: '772px',
                width: '800px',
                panelClass: 'dialog-create-workdays',
            })
            .afterClosed()
            .subscribe((result) => { });
    }
}
