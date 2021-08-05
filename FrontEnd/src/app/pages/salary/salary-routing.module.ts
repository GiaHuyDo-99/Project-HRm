import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalaryPageComponent } from './salary-page.component';

const routes: Routes = [
    {
        path: '',
        component: SalaryPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SalaryRoutingModule { }
