import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { FormsModule } from '@angular/forms';
import { SalaryPageComponent } from './salary-page.component';
import { SalaryRoutingModule } from './salary-routing.module';
@NgModule({
    declarations: [
        SalaryPageComponent,
        AddSalaryComponent,

    ],
    imports: [
        CommonModule,
        SalaryRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class SalaryModule { }
