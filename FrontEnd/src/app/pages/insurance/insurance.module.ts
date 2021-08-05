import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InsurancePageComponent } from "./insurance-page.component";
import { InsuranceRoutingModule } from "./insurance-routing.module";

@NgModule({
    declarations: [
        InsurancePageComponent

    ],
    imports: [
        CommonModule,
        SharedModule,
        InsuranceRoutingModule
     

      
        
    ],
})
export class InsuranceModule { }
