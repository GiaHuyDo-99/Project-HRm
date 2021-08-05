import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportPageComponent } from './report-page.component';
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: ReportPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes),CommonModule],
    exports: [RouterModule],
})
export class ReportRoutingModule { }
