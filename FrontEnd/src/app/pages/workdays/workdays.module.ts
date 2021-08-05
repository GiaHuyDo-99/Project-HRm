import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateWorkdaysComponent } from './create-workday/create-workdays.component';
import { WorkdaysPageComponent } from './workdays-page.component';
import { WorkdaysRoutingModule } from './workdays-routing.module';
@NgModule({
    declarations: [
        WorkdaysPageComponent,
        CreateWorkdaysComponent
    ],
    imports: [
        CommonModule,
        WorkdaysRoutingModule,
        FormsModule
    ],
})
export class WorkdaysModule { }
