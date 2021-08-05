import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportRoutingModule } from './report-routing.module';
import { ReportPageComponent } from "./report-page.component";


@NgModule({
    declarations: [
        ReportPageComponent

    ],
    imports: [
        CommonModule,
        SharedModule,
        ReportRoutingModule,
        
    
     

      
        
    ],
})
export class ReportModule { }
