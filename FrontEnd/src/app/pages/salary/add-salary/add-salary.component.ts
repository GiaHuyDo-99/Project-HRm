import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalaryModel } from 'src/app/common/model';
import { SalaryService } from '../../../common/service/salary.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-add-salary',
    templateUrl: './add-salary.component.html',
    styleUrls: ['./add-salary.component.scss'],
})
export class AddSalaryComponent implements OnInit {
    model = new SalaryModel();
    salary: SalaryModel = new SalaryModel();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddSalaryComponent>,
        private salaryService: SalaryService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        console.log(this.data);
    }

    saveNewSalary(){
        this.salaryService.createSalary(this.salary).subscribe( data =>{
          console.log(data);
    
          this.goToSalaryList();
    
        },
        error => console.log(error));
      }
      goToSalaryList(){
        this.router.navigate(['/salary']);
      }
      
      onSubmit(){
        console.log(this.salary);
        this.saveNewSalary();
        this.dialogRef.close();
     
      }
    closeDialog() {
        this.dialogRef.close();
    }

  
}
