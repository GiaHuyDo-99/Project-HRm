import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsurancePageComponent } from "./insurance-page.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: InsurancePageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes),CommonModule],
    exports: [RouterModule],
})
export class InsuranceRoutingModule { }
