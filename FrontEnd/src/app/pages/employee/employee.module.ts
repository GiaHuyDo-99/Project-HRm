import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeePageComponent } from './employee-page.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
    declarations: [
        EmployeePageComponent,
        CreateEmployeeComponent,


    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        FormsModule,
    ],
})
export class EmployeeModule { }
