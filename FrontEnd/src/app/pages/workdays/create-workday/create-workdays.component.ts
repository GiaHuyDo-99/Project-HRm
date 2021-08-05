import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkdaysModel } from "src/app/common/model/workday.model";
import { WorkdayService } from 'src/app/common/service';
@Component({
  selector: 'app-create-workdays',
  templateUrl: './create-workdays.component.html',
  styleUrls: ['./create-workdays.component.scss'],
})
export class CreateWorkdaysComponent implements OnInit {
  workdays: WorkdaysModel[]
  workday: WorkdaysModel = new WorkdaysModel();  
  constructor(public dialogRef: MatDialogRef<CreateWorkdaysComponent>,
            private service: WorkdayService,
    ) {}
  
    
  ngOnInit(): void {}
  saveWorkday(){
    this.service.createWorkday(this.workday).subscribe( data =>{
      console.log(data);
      this.getListWorkday();
    },
    error => console.log(error));
  }
  getListWorkday(){
    this.service.getWordayList().subscribe(data => {
      this.workdays = data;
    });
  }
  onSubmit(){
    console.log(this.workdays);
    this.saveWorkday();
    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
