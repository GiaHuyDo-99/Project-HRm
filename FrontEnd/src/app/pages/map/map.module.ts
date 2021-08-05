import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapRoutingModule } from "./map-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [


    ],
    imports: [
        CommonModule,
        SharedModule,
        MapRoutingModule,

      
    ],
})
export class MapModule { }
